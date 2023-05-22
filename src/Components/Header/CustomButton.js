import React from "react";
import "./Header.css";
import "./CustomButton.css";

const CustomButton = ({ title }) => {
  return (
    <div className="custom-btn">
      <button type="btn btn-primary" className=" all-buttons">{title} </button>
    </div>
  );
};
export default CustomButton;
