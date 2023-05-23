import React, { useState } from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Footer from "../Footer/Footer";
import Cart from "../MainBody/Cart";

const Home = () => {
  const [cartModal, setcartModal] = useState(false);
  const [addItem, setaddItem] = useState([]);

  const toggleCartFunction = () => {
    setcartModal(!cartModal);
  };

  const toggleAddItem = (item) => {
    const ArrayOfItem = addItem.findIndex((oldItem) => oldItem.id === item.id);
    if (ArrayOfItem !== -1) {
      const UpdatedtoggleItem = [...addItem];
      UpdatedtoggleItem[ArrayOfItem]["count"] = UpdatedtoggleItem[ArrayOfItem].count + 1;
      setaddItem(UpdatedtoggleItem);
    } else {
      setaddItem((prev) => [...prev, {...item, count: 1 }]);
    }
  };
 
return (
  <div>
    <Header ontoggleCartFunction={toggleCartFunction} onaddItem={addItem} />
    {cartModal && <Cart ontoggleAddItem={toggleAddItem}/>}
    
    <MainBody ontoggleAddItem={toggleAddItem} onaddItem={addItem}  />
    <Footer />
  </div>
);

}

export default Home;
