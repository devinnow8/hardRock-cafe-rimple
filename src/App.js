import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import MainBody from "./Components/MainBody/MainBody.js";
import Footer from "./Components/Footer/Footer.js";
import Cart from "./Components/MainBody/Cart";
import { useState } from "react";
function App() {
  let [cart, setCart] = useState(false);

  function clickHandler() {
    setCart(true);
  }

  // let cart=false;

  // function clickHandler(){
  //   cart=true;
  // }

  return (
    <div className="App">
      <Header clickHandler={clickHandler} />

      {cart && <Cart />}
      <MainBody />

      <Footer />
    </div>
  );
}

export default App;
