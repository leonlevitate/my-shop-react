import React, { Component } from "react";
import "./App.css";
import Catalog from "./catalog";
import Cart from "./cart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Catalog App</h1>
        </header>
        <Catalog />
        <Cart />
      </div>
    );
  }
}

export default App;
