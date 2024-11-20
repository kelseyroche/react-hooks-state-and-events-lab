import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const handleCartToggle = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };
  const itemClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add To Cart";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>Add to Cart</button>
    </li>
  );
}

export default Item;
