import Bacon from "../MainBody/Menupictures/Bacon.jpeg";
import Eggs from "../MainBody/Menupictures/Eggs.png";
import Shake from "../MainBody/Menupictures/Godzilla milkshake.webp";
import Pancake from "../MainBody/Menupictures/Pancake.jpeg";
import AmericaDish from "../MainBody/Menupictures/american.jpeg";
import CountryDelight from "../MainBody/Menupictures/countrydelight.jpeg";
import Double from "../MainBody/Menupictures/dinnerdouble.jpeg";
import Oreo from "../MainBody/Menupictures/oreocake.jpeg";

export const FoodItemData = [
	{
		id: 1,
		title: "Buttermilk Pancakes",
		image: Pancake,
		category: "Breakfast",
		price: 599,
	},
	{ id: 2, title: "Godzilla Milkshake ", image: Shake, category: "Lunch", price: 400 },
	{ id: 3, title: "Egg Attacks", image: Eggs, category: "Breakfast", price: 379 },
	{ id: 4, title: "Bacon Overflow", image: Bacon, category: "Lunch", price: 299 },
	{ id: 5, title: " Diner Double", image: Double, category: "Lunch", price: 499 },
	{ id: 6, title: "Country Delight", image: CountryDelight, category: "Shake", price: 99 },
	{ id: 7, title: "Oreo Classic", image: Oreo, category: "Shake", price: 400 },
	{
		id: 8,
		title: " American Classic",
		image: AmericaDish,
		category: "Breakfast",
		price: 199,
	},
];

export const ButtonData = [
	{ id: 1, category: "All" },
	{ id: 2, category: "Breakfast" },
	{ id: 3, category: "Lunch" },
	{ id: 4, category: "Shake" },
];
