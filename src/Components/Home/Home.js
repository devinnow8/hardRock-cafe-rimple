import React, { useState } from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Footer from "../Footer/Footer";
import Cart from "../MainBody/Cart";

const Home = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleToggleCart = () => {
    setCartOpen(!isCartOpen);
  }

  const handleAddCartItems = (item) => {
    const oldItemIndex = cartItems.findIndex(oldItem => oldItem.id === item.id)
    if (oldItemIndex !== -1) {
      const updatedItems = [...cartItems]
      updatedItems[oldItemIndex]['count'] = updatedItems[oldItemIndex].count + 1
      setCartItems(updatedItems)

    } else {
      setCartItems(prevState => [...prevState, { ...item, count: 1 }])
    }
  };

  console.log('cartItems', cartItems)

  const handleRemoveCartItems = (index) => {
    const updatedItems = [...cartItems]
    if (updatedItems[index]['count'] > 1) {
      const updatedItems = [...cartItems]
      updatedItems[index]['count'] = updatedItems[index].count - 1
      setCartItems(updatedItems)
    } else {
      updatedItems.splice(index, 1)
      setCartItems(updatedItems)
    }
  };

  return (
    <>
      <Header onToggleCart={handleToggleCart} cartItems={cartItems} />
      {isCartOpen && <Cart onToggleCart={handleToggleCart} />}
      <MainBody
        cartItems={cartItems}
        onAddItems={handleAddCartItems}
        onRemoveItems={handleRemoveCartItems}
      />
      <Footer />
    </>
  );
};
export default Home;
