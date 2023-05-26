import React from "react";
import "./Header.css";
import "./CustomButton.css";

const CustomButton = ({ onItemcategory, onfilteredCategory }) => {
  console.log(onItemcategory, "onItemcategoryonItemcategory");
  return (
    <div className="custom-btn">
      <button
        type="btn btn-primary"
        onClick={() => onfilteredCategory(onItemcategory.category)}
        className="all-buttons"
      >
        {onItemcategory.category}{" "}
      </button>
    </div>
  );
};
export default CustomButton;
