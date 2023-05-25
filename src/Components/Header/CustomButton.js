import React from "react";
import "./Header.css";
import "./CustomButton.css";

const CustomButton = ({ category, oncategoryOfItems,categoryOfButton}) => {
  return (
    <div className="custom-btn">
      <button type="btn btn-primary" onClick= {()=>oncategoryOfItems(categoryOfButton)} className="all-buttons" >{category} </button>
    </div>
  );
};
export default CustomButton;
