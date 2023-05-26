import React, { useState, useEffect } from "react";
import { default as Header } from "../Header/Header";
import { default as MainBody } from "../MainBody/MainBody";
import Footer from "../Footer/Footer";
import Cart from "../MainBody/Cart";
import { ButtonData, FoodItemData } from "../Data/mockdata";

const defaultCategory = ButtonData[0].category;
const Home = () => {
  const [cartModal, setcartModal] = useState(false); // for Modal state
  const [addItem, setaddItem] = useState([]); // for (+) and (-) button state
  const [category, setCategory] = useState(defaultCategory); // category wise Button
  const [obtainedItems, setObatainedItems] = useState([]);

  // Modal Function
  const toggleCartFunction = () => {
    setcartModal(!cartModal);
  };

  // Add(+) button function
  const toggleAddItem = (item) => {
    const indexOfitem = addItem.findIndex((oldItem) => oldItem.id === item.id);
    if (indexOfitem !== -1) {
      const updatedToggleItem = [...addItem];
      updatedToggleItem[indexOfitem]["count"] =
        updatedToggleItem[indexOfitem].count + 1;
      setaddItem(updatedToggleItem);
    } else {
      setaddItem((prev) => [...prev, { ...item, count: 1 }]);
    }
  };

  // Remove (-) button Function
  const toggleRemoveItem = (index,isRemove=false) => {
    const updatedToggleItem = [...addItem];
    if (isRemove||updatedToggleItem[index]["count"] ===1){
	 updatedToggleItem.splice(index, 1);
       setaddItem(updatedToggleItem);
    } else {
	updatedToggleItem[index]["count"] = updatedToggleItem[index].count - 1;
    setaddItem(updatedToggleItem);
    }
  };

  useEffect(() => {
    if (category === "ALL") {
      setObatainedItems(FoodItemData);
    } else {
      const items = FoodItemData.filter((item) => item.category === category);
      setObatainedItems(items);
    }
  }, [category]);

  //category wise Buttons function
  const filteredCategory = (item) => {
    setCategory(item);
  };
  return (
    <div>
      <Header
        onToggleCartFunction={toggleCartFunction} //cart
        onaddItem={addItem} // adding number in cart
        filteredCategory={filteredCategory} //function for category of Buttons
        FoodItemData={FoodItemData}
      />
      {cartModal && <Cart ontoggleAddItem={toggleAddItem} />}

      <MainBody
        ontoggleAddItem={toggleAddItem}
        onaddItem={addItem}
        ontoggleRemoveItem={toggleRemoveItem}
        FoodItemData={obtainedItems}
      />
      <Footer />
    </div>
  );
};

export default Home;
