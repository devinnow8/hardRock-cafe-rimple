import React, { useEffect, useState } from "react";
import { ButtonData } from "../Data/mockdata";
import Footer from "../Footer/Footer";
import { default as Header } from "../Header/Header";
import Cart from "../MainBody/Cart";
import { default as MainBody } from "../MainBody/MainBody";
import {
  addItemInCart,
  getAllCards,
  viewCart,
  updatedItemInCart,
  deleteItemCart
  
} from "../API";

const defaultCategory = ButtonData[0].category;

const Home = ({ handleRefreshToken, handleLogout }) => {
    const [cartModal, setCartModal] = useState(false); // for Modal state
    const [selectedItems, setSelectedItems] = useState([]); // for (+) and (-) button state
    const [category, setCategory] = useState(defaultCategory); // category wise Button
    const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    if (category === "All") {
      getAllCards()
        .then((res) => {
        setFoodItems(res);
        let response= res.map((item)=>({...item, count:0}))
        console.log(response,"lololololololo==>");
        return setFoodItems(response)
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            // If the response is 401 Unauthorized, refresh the token
            handleRefreshToken();
          } else {
            // Handle other errors
            console.error("Request failed!", error);
          }
        });
    } else {
      getAllCards()
        .then((res) => {
          const result = res;
          const items = result.filter((item) => item.category === category);
          setFoodItems(items);
          let response= items.map((item)=>({...item, count:0}))
        return setFoodItems(response)
         
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            // If the response is 401 Unauthorized, refresh the token
            handleRefreshToken();
          } else {
            // Handle other errors
            console.error("Request failed!", error);
          }
        });
    }
  }, [category]);

  // Modal Function
  const toggleCartFunction = () => {
    viewCart()
      .then((res) => {
        setCartModal(!cartModal);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  console.log("selectedItems", selectedItems);

  // Add(+) button function
  const toggleAddItem = (item) => {
    console.log(item,'itemitem==>>');
    addItemInCart({product_id:item.id, quantity:item.count + 1}).then((res) => {
            if (res) {
              console.log(res,'resres-->');
              setSelectedItems((prev) => [...prev, { ...item, count: item.count + 1 }]); 
            }
          });
  
  };

// Remove (-) button Function
const toggleRemoveItem = (item, isRemove = false) => {
  if(item.count === 1){
    deleteItemCart(item.id)
  }else{
    addItemInCart({product_id:item.id, quantity:item.count - 1}).then((res) => {
      if (res) {
        console.log(res,'resres-->');
        setSelectedItems((prev) => [...prev, { ...item, count: item.count - 1 }]); 
      }
    });
  }
  // const index = selectedItems.findIndex((oldItem) => oldItem.id === item.id);
  // const updatedToggleItem = [...selectedItems];
  // if (isRemove || updatedToggleItem[index]["count"] === 1) {
  //   updatedItemInCart().then((res) => {
      
  //     if (res) {
  //       updatedToggleItem.splice(index, 1);
  //       setSelectedItems(updatedToggleItem);
  //     }
  //   });
  // } else {
  //   deleteItemCart({
  //    item: { "title": "",
  //         "price": "",
  //         "image": ""
  //     },
  //     "quantity": ""
  // }).then((res) => {
  //     if (res) {
  //       updatedToggleItem[index]["count"] = updatedToggleItem[index].count - 1;
  //       setSelectedItems(updatedToggleItem);
  //     }
  //   });
  // }
}
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
