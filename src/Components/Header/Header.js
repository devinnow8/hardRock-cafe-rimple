import React from "react";
import CustomButton from "./CustomButton";
import {ButtonData} from "../Data/Data";
import cart from "./Logo/cart.png";
import hotellogo from "./Logo/hotel.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="HotelLogo">
          <img className="Image1" src={hotellogo} />
        </div>
        <div className="heading_center">
          {" "}
          <h2 className="LogoName" style={{ paddingRight: "76px" }}>
            {" "}
            SUNRISE
          </h2>
        </div>
        <div className="Cart-image">
          <img className="Image2" src={cart} />
          <span className="number"> 0</span>
        </div>
      </div>

      <div className="menu_container">
        <div className="Heading">
          {" "}
          <h3 className="Menu"> Our Menu</h3>
        </div>
        <div className="Buttons">
          {ButtonData.map((btn) => {
            return <CustomButton title={btn.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
