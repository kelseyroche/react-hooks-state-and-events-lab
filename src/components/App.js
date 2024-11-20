import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Item from "./Item.js";
import {useState} from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light"
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setIsDarkMode(prevMode => !prevMode)}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
