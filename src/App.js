import "./App.css";
import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productCards } from "./static/data";

function App() {
  let [productsState, setProducts] = useState(productCards);

  let handleIncrease = (item) => {
    item.quantity = item.quantity + 1;
    setProducts([...productCards]);
  };

  let handleDecrease = (item) => {
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
    }
    setProducts([...productCards]);
  };

  return (
    <div className="App">
      <Header products={productsState} />
      <Body
        products={productsState}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <Footer />
    </div>
  );
}

export default App;
