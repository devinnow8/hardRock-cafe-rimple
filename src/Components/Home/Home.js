import React, { useEffect, useState } from "react";
import { FoodCategoryData, FoodItemData } from "../../common/mockData";
import Footer from "../Footer/Footer";
import { default as Header } from "../Header/Header";
import Cart from "../MainBody/Cart";
import { default as MainBody } from "../MainBody/MainBody";

// set default category i.e. All
const defaultCategory = FoodCategoryData[0].category;

const Home = () => {
	const [cartModal, setcartModal] = useState(false);
	const [addItem, setaddItem] = useState([]);
	const [disableItem, setdisableItem] = useState(true);

	const [category, setCategory] = useState(defaultCategory);
	const [foodItemsData, setFoodItemsData] = useState([]);

	useEffect(() => {
		if (category === "All") {
			setFoodItemsData(FoodItemData);
		} else {
			const updatedFoodItemData = FoodItemData.filter((item) => item.category === category);
			setFoodItemsData(updatedFoodItemData);
		}
	}, [category]);

	const toggleCartFunction = () => {
		setcartModal(!cartModal);
	};

	const handleFilterCategory = (cat) => {
		setCategory(cat);
	};

	const toggleAddItem = (item) => {
		const indexOfitem = addItem.findIndex((oldItem) => oldItem.id === item.id);
		if (indexOfitem !== -1) {
			const updatedToggleItem = [...addItem];
			updatedToggleItem[indexOfitem]["count"] = updatedToggleItem[indexOfitem].count + 1;
			setaddItem(updatedToggleItem);
		} else {
			setaddItem((prev) => [...prev, { ...item, count: 1 }]);
		}
	};

	const toggleRemoveItem = (index) => {
		const updatedToggleItem = [...addItem];
		if (updatedToggleItem[index]["count"] > 1) {
			updatedToggleItem[index]["count"] = updatedToggleItem[index].count - 1;
			setaddItem(updatedToggleItem);
		} else {
			updatedToggleItem.splice(index, 1);
			setaddItem(updatedToggleItem);
		}
	};

	const buttondisableItem = () => {
		setdisableItem(!disableItem);
	};

	return (
		<div>
			<Header onToggleCartFunction={toggleCartFunction} onaddItem={addItem} onFilterCategory={handleFilterCategory} />
			{cartModal && <Cart ontoggleAddItem={toggleAddItem} />}

			<MainBody foodItemsData={foodItemsData} ontoggleAddItem={toggleAddItem} onaddItem={addItem} ontoggleRemoveItem={toggleRemoveItem} onbuttondisableItem={buttondisableItem} disableItem={disableItem} selectedCategory={category} />
			<Footer />
		</div>
	);
};

export default Home;
