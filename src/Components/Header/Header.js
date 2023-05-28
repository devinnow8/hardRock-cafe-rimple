import React from "react";
import { ButtonData } from "../Data/mockdata";
import CustomButton from "./CustomButton";
import "./Header.css";
import cart from "./Logo/cart.png";
import hotellogo from "./Logo/hotel.png";

const Header = ({ selectedCategory, onToggleCartFunction, selectedItems, filteredCategory }) => {
	return (
		<>
			<div className="header-container">
				<div className="hotel">
					<img className="hotel-img" src={hotellogo} alt={" "} />
				</div>
				<div className="heading-center">
					{" "}
					<h2
						className="logo-name"
						style={{
							paddingRight: "76px",
						}}
					>
						{" "}
						SUNRISE
					</h2>
				</div>
				<div className="cart" onClick={() => onToggleCartFunction()}>
					<img className="cart-image" src={cart} alt={""} />
					<span className="number"> {selectedItems.length}</span>
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
								selectedCategory={selectedCategory}
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
