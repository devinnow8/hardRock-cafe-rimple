import React from "react";
import "./CustomButton.css";
import "./Header.css";

const CustomButton = ({ selectedCategory, onItemcategory, onfilteredCategory }) => {
	return (
		<div className="custom-btn">
			<button
				type="btn btn-primary"
				onClick={() => onfilteredCategory(onItemcategory.category)}
				className="all-buttons"
				style={
					selectedCategory === onItemcategory.category
						? {
								backgroundColor: "brown",
								color: "white",
						  }
						: {}
				}
			>
				{onItemcategory.category}{" "}
			</button>
		</div>
	);
};
export default CustomButton;
