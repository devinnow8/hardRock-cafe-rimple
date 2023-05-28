import React, { useEffect, useState } from "react";
import { ButtonData, FoodItemData } from "../Data/mockdata";
import Footer from "../Footer/Footer";
import { default as Header } from "../Header/Header";
import Cart from "../MainBody/Cart";
import { default as MainBody } from "../MainBody/MainBody";

const defaultCategory = ButtonData[0].category;
const Home = () => {
	const [cartModal, setcartModal] = useState(false); // for Modal state
	const [selectedItems, setSelectedItems] = useState([]); // for (+) and (-) button state
	const [category, setCategory] = useState(defaultCategory); // category wise Button
	const [foodItems, setFoodItems] = useState([]);

	// Modal Function
	const toggleCartFunction = () => {
		setcartModal(!cartModal);
	};

	// Add(+) button function
	const toggleAddItem = (item) => {
		const indexOfitem = selectedItems.findIndex((oldItem) => oldItem.id === item.id);
		if (indexOfitem !== -1) {
			const updatedToggleItem = [...selectedItems];
			updatedToggleItem[indexOfitem]["count"] = updatedToggleItem[indexOfitem].count + 1;
			setSelectedItems(updatedToggleItem);
		} else {
			setSelectedItems((prev) => [...prev, { ...item, count: 1 }]);
		}
	};

	// Remove (-) button Function
	const toggleRemoveItem = (item, isRemove = false) => {
		const index = selectedItems.findIndex((oldItem) => oldItem.id === item.id);
		const updatedToggleItem = [...selectedItems];
		if (isRemove || updatedToggleItem[index]["count"] === 1) {
			updatedToggleItem.splice(index, 1);
			setSelectedItems(updatedToggleItem);
		} else {
			updatedToggleItem[index]["count"] = updatedToggleItem[index].count - 1;
			setSelectedItems(updatedToggleItem);
		}
	};

	useEffect(() => {
		if (category === "All") {
			setFoodItems(FoodItemData);
		} else {
			const items = FoodItemData.filter((item) => item.category === category);
			setFoodItems(items);
		}
	}, [category]);

	//category wise Buttons function
	const filteredCategory = (item) => {
		setCategory(item);
	};
	return (
		<div>
			<Header
				onToggleCartFunction={toggleCartFunction} //cart
				selectedItems={selectedItems} // adding number in cart
				filteredCategory={filteredCategory} //function for category of Buttons
				selectedCategory={category}
			/>
			{cartModal && <Cart selectedItems={selectedItems} onToggleCart={toggleCartFunction} />}

			<MainBody onToggleAddItem={toggleAddItem} selectedItems={selectedItems} onToggleRemoveItem={toggleRemoveItem} foodItems={foodItems} />
			<Footer />
		</div>
	);
};

export default Home;
