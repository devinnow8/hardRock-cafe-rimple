import React from "react";
import CustomButton from "./CustomButton";
import { ButtonData } from "../Data/mockdata";
import cart from "./Logo/cart.png";
import hotellogo from "./Logo/hotel.png";
import "./Header.css";

const Header = ({ onToggleCartFunction, onaddItem, filteredCategory }) => {
  console.log(ButtonData, "ButtonData");
  return (
    <>
      <div className="header-container">
        <div className="hotel">
          <img className="hotel-img" src={hotellogo} alt={" "} />
        </div>
        <div className="heading-center">
          {" "}
          <h2 className="logo-name" style={{ paddingRight: "76px" }}>
            {" "}
            SUNRISE
          </h2>
        </div>
        <div className="cart" onClick={() => onToggleCartFunction()}>
          <img className="cart-image" src={cart} alt={""} />
          <span className="number"> {onaddItem.length}</span>
        </div>
      </div>

      <div className="menu-container">
        <div className="heading">
          {" "}
          <h3 className="menu"> Our Menu</h3>
        </div>
        <div className="buttons">
          {ButtonData.map((Itemcategory) => {
            return (
              <CustomButton
                onItemcategory={Itemcategory}
                onfilteredCategory={filteredCategory}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
