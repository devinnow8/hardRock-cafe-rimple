import React, { useState } from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Footer from "../Footer/Footer";
import Cart from "../MainBody/Cart";

const Home = () => {
  const [cartModal, setcartModal] = useState(false);
  const [addItem, setaddItem] = useState([]);
  const [disableItem, setdisableItem] = useState(true);
  const [itembutton, setItemButton] = useState([]);

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
  
  };

  return (
    <div>
      <Header ontoggleCartFunction={toggleCartFunction} onaddItem={addItem} />
      {cartModal && <Cart ontoggleAddItem={toggleAddItem} />}

      <MainBody
        ontoggleAddItem={toggleAddItem}
        onaddItem={addItem}
        ontoggleRemoveItem={toggleRemoveItem}
        onbuttondisableItem={buttondisableItem}
        disableItem={disableItem}
      />
      <Footer />
    </div>
  );
};

export default Home;
