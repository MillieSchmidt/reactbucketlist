import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Add from './views/Add';
import About from './views/About';
import './App.css';

function App() {
  const [showAddItem, setShowAddItem] = useState(false);

  const [items, setItems] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    }

    getItems();
  }, [])

  // Fetch Items
  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    return data;
  }

  // Add Item
  const addItem = async (item) => {
    const res = await fetch('http://localhost:5000/Items', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item)
    });

    const data = await res.json();

    setItems([...items, data]);
  }

  // Delete Item
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/Items/${id}`, {
      method: 'DELETE'
    });

    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="relative min-h-screen">
      <Router>
        <Header showAdd={() => setShowAddItem(!showAddItem)} showAddItem={showAddItem} />

        <div>
          <Switch>
            <Route exact path="/">
              {showAddItem && <Add onAdd={addItem} />}
              <Home items={items} onDelete={deleteItem} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
