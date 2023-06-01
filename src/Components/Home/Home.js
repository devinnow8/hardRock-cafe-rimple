import React, { useEffect, useState } from "react";
import { ButtonData, FoodItemData } from "../Data/mockdata";
import Footer from "../Footer/Footer";
import { default as Header } from "../Header/Header";
import Cart from "../MainBody/Cart";
import { default as MainBody } from "../MainBody/MainBody";
// import { getData } from "../API data";
import { getAllCards,viewCart,addItemInCart,deleteItemInCart,UpdatedItemInCart} from "../API";
import axios from "axios";

const defaultCategory = ButtonData[0].category;
const Home = () => {
  const [cartModal, setCartModal] = useState(false); // for Modal state
  const [selectedItems, setSelectedItems] = useState([]); // for (+) and (-) button state
  const [category, setCategory] = useState(defaultCategory); // category wise Button // Done  
  const [foodItems, setFoodItems] = useState([]); // Done

  useEffect(() => {
    if (category === "All") {
      getAllCards()
        .then((res) => {
          setFoodItems(res.data);
        })
        .catch((error) => console.log(error));
      // fetch("http://192.168.1.204:8000/list/ ") // API
      //   .then((result) => {
      //     return result.json();
      //   })
      //   .then((res) => setFoodItems(res))
      //   .catch((error) => {
      //     console.log("error", error);
      //   });
    } else {
       // filtering according to category
       getAllCards()
         .then((res) => {
          const result= res.data
          const items = result.filter((item) => item.category === category);
          setFoodItems(items);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [category]);

  
  // Modal Function
  const toggleCartFunction = () => {
    setCartModal(!cartModal);
  };

  // Add(+) button function
  const toggleAddItem = (item) => {
    const indexOfitem = selectedItems.findIndex((oldItem) => oldItem.id === item.id,
    );
    if (indexOfitem !== -1) {
      const updatedToggleItem = [...selectedItems];
      updatedToggleItem[indexOfitem].count += 1;
      setSelectedItems(updatedToggleItem);
    } else {
      setSelectedItems((prev) => [...prev, { ...item, count: 1 }]);
    }
  };

  // Remove (-) button Function
  const toggleRemoveItem = (item, isRemove = false) => {
    const index = selectedItems.findIndex((oldItem) => oldItem.id === item.id);
    const updatedToggleItem = [...selectedItems];
    if (isRemove || updatedToggleItem[index]["count"] === 1) {
      updatedToggleItem.splice(index, 1);
      setSelectedItems(updatedToggleItem);
    } else {
      updatedToggleItem[index]["count"] = updatedToggleItem[index].count - 1;
      setSelectedItems(updatedToggleItem);
    }
  };

  //category wise Buttons function
  const filteredCategory = (item) => {
    setCategory(item);
  };

  const handleClearCart = () => {
    setSelectedItems([]);
  };

  const handleCheckout = () => {
    setSelectedItems([]);
    setCartModal(false);
  };

  return (
    <div>
      <Header
        onToggleCartFunction={toggleCartFunction} //cart
        selectedItems={selectedItems} // adding number in cart
        filteredCategory={filteredCategory} //function for category of Buttons
        selectedCategory={category}
      />
      {cartModal && (
        <Cart
          selectedItems={selectedItems}
          onToggleRemoveItem={toggleRemoveItem}
          onToggleCart={toggleCartFunction}
          onClearCart={handleClearCart}
          onCheckout={handleCheckout}
          toggleAddItem={toggleAddItem}
         
        />
      )}

      <MainBody
        onToggleAddItem={toggleAddItem}
        selectedItems={selectedItems}
        onToggleRemoveItem={toggleRemoveItem}
        foodItems={foodItems}
      />
      <Footer />
    </div>
  );
};

export default Home;
