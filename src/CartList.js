import React from "react";
import "./cartlist.css";

class CartList extends React.Component {
  render() {
    return (
      <div class="cart">
        <h3>Shopping Cart:</h3>
        <ul>
          <p>Traditional Merlot</p>
        </ul>
        <ul>
          <p>Classic Chianti</p>
        </ul>
      </div>
    );
  }
}

export default CartList;
