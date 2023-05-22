import React from "react";
import Header from "../Header/Header.js";
import MainBody from "../MainBody/MainBody.js";
import FoodItem from "../MainBody/FoodItem.js";
import Footer from "../Footer/Footer.js";
import Cart from "../MainBody/Cart";
import { useState } from "react";
const Home = () => {
  <div> 
  let [cart, setCart] = useState(false);
  function clickHandler() {
    setCart(!cart);   
  return (
    <div className="home">
      <Header clickHandler={clickHandler} />
        {cart && <Cart />} 
      </div>) }
      
      const [itemCounter, setItemCounter] = useState(1);
     const handleItemCount = (isSubtract) => {
      if (isSubtract === true) {
        if (itemCounter === 1) return;
        setItemCounter((prevState) => prevState - 1);
      } else setItemCounter((prevState) => prevState + 1);
    };
     return 
     ( <div> <MainBody onUpdateItemCount={handleItemCount} /> </div>)

    
    <Footer/>
    {""}
    </div>
  ;
export default Home;
