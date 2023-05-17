import React from "react";
import CustomButton from "./CustomButton";
import ButtonData from "./ButtonData";
import cart from "./Logo/cart.png";
import hotellogo from "./Logo/hotel.png";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="HotelLogo">
        <img src={hotellogo} />
      </div>

      <div className="heading">
        {" "}
        <h2> SUNRISE</h2>
        <h4> Our Menu</h4>
      </div>

      <div className="Buttons">
        {ButtonData.map((btn) => {
          return <CustomButton title={btn.title} />;
        })}
      </div>
      <div className="CartImage">
        <img src={cart} />
      </div>
    </div>
  );
};

export default Header;
