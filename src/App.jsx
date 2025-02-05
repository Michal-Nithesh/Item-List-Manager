import './App.css';
import  "h8k-components";
import Header from './Header';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  function handleAddItems() {
    if (input.length === 0) {
      return;
    }

    setItems((prevItems) => [...prevItems, input]);
    setInput("");
  }

  return (
    <>
      <Header />
      <div className="item-content">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAddItems}>Add Item</button>
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App
