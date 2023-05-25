import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Footer from "../Footer/Footer";
import Cart from "../MainBody/Cart";
import category from "../Header/Header";
import filteredItem from "../MainBody/MainBody";
import categoryOfButton from "../Header/Header";

const Home = () => {
  const [cartModal, setcartModal] = useState(false);
  const [addItem, setaddItem] = useState([]);
  const [disableItem, setdisableItem] = useState(true);

  const [itembutton, setItemButton] = useState(category);

  useEffect(() => {}, [itembutton]);

  const toggleCartFunction = () => {
    setcartModal(!cartModal);
  };

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

  const toggleRemoveItem = (index) => {
    const updatedToggleItem = [...addItem];
    if (updatedToggleItem[index]["count"] > 1) {
      updatedToggleItem[index]["count"] = updatedToggleItem[index].count - 1;
      setaddItem(updatedToggleItem);
    } else {
      updatedToggleItem.splice(index, 1);
      setaddItem(updatedToggleItem);
    }
  };
  const buttondisableItem = () => {
    setdisableItem(!disableItem);

    const categoryOfItems = () => {
      setItemButton(categoryOfButton === filteredItem);
    };
    return (
      <div>
        <Header
          ontoggleCartFunction={toggleCartFunction}
          onaddItem={addItem}
          oncategoryOfItems={categoryOfItems}
          itembutton={itembutton}
        />
        {cartModal && <Cart ontoggleAddItem={toggleAddItem} />}

        <MainBody
          ontoggleAddItem={toggleAddItem}
          onaddItem={addItem}
          ontoggleRemoveItem={toggleRemoveItem}
          onbuttondisableItem={buttondisableItem}
          disableItem={disableItem}
          onitembutton={itembutton}
        />
        <Footer />
      </div>
    );
  };
};

export default Home;
