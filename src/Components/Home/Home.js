import React from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Footer from "../Footer/Footer";
import Cart from "../MainBody/Cart";
import { useState } from "react";
const Home = () => {
  let [cart, setCart] = useState(false);
  const clickHandler=()=> {
    setCart(!cart);
  }
  const [itemCounter, setItemCounter] = useState(1);
  const handleItemCount = (isSubtract) => {
    if (isSubtract === true) {
      if (itemCounter === 1)
    setItemCounter((prevState) => prevState - 1);     
    } 
    else setItemCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <Header clickHandler={clickHandler} />
      {cart && <Cart />}
      <MainBody onUpdateItemCount={handleItemCount} />
      <Footer />
    </>
  );
};
export default Home;
