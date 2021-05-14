import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Add from './views/Add';
import About from './views/About';
import './App.css';

function App() {
  const [items = [
    {
      title: "Visit Tokyo",
      deadline: "12/3/2027",
      id: 1
    },
    {
      title: "Learn to surf",
      deadline: "12/1/2025",
      id: 2
    }
  ], setItems] = useState(false);

  const [showAddItem, setShowAddItem] = useState(false);
  // Show Items
  useEffect((items) => {
    setItems(items);
  }, []);

  // Add Item
  const addItem = (item) => {
    setItems([...items, item]);
  }

  // Delete Item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="relative min-h-screen">
      <Router>
        <Header showAdd={() => setShowAddItem(!showAddItem)} showAddItem={showAddItem} />

        <div>
          <Switch>
            <Route path="/list">
              {showAddItem && <Add onAdd={addItem} />}
              <Home items={items} onDelete={deleteItem} />
            </Route>
            <Route exact path="/">
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