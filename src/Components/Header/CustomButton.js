import React from "react";
import "./CustomButton.css";
import "./Header.css";

const CustomButton = ({ categoryItem, onFilterCategory }) => {
	return (
		<div className="custom-btn">
			<button type="btn btn-primary" onClick={() => onFilterCategory(categoryItem.category)} className="all-buttons">
				{categoryItem.category}{" "}
			</button>
		</div>
	);
};
export default CustomButton;
