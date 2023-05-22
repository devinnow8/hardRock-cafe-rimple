import React from "react";
import CustomButton from "./CustomButton";
import ButtonData from "./ButtonData";
import cart from "./Logo/cart.png";
import hotellogo from "./Logo/hotel.png";
import "./Header.css";


const Header = ({ onToggleCart, cartItems }) => {


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
        <div className="cart" onClick={onToggleCart}>
          <img className="cart-image" src={cart} alt={""} />
          <span className="number">{cartItems.length}</span>
        </div>
      </div>

      <div className="menu-container">
        <div className="heading">
          {" "}
          <h3 className="menu"> Our Menu</h3>
        </div>
        <div className="buttons">
          {ButtonData.map((btn) => {
            return <CustomButton title={btn.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
