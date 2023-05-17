import React from "react";
import "./Footer.css";
import hotellogo from "./hotel.png";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <div className="Footer">
      <span className="hotel">
        {" "}
        <img src={hotellogo} />
      </span>
      <div className=" column1">
        {" "}
        <h5>WEEBLY THEMES </h5>
        <h5>PRE-SALE FAQS</h5>
        <h5> SUBMIT A TICKET</h5>
      </div>

      <div className="column2">
        {" "}
        <h5> SERVICES </h5>
        <h5> THEMES TWEAK</h5>
      </div>

      <div className="column3">
        {" "}
        <h5> ABOUT US</h5>
        <h5> CONTACT US</h5>
        <h5> AFFLIATES</h5>
        <h5> RESOURCES</h5>
      </div>
      <hr />
      <div>
        {" "}
        <SocialButtons />{" "}
      </div>
    </div>
  );
};
export default Footer;
