import Bacon from "./Menupictures/Bacon.jpeg";
import Eggs from "./Menupictures/Eggs.png";
import Shake from "./Menupictures/Godzilla milkshake.webp";
import Pancake from "./Menupictures/Pancake.jpeg";
import AmericaDish from "./Menupictures/american.jpeg";
import CountryDelight from "./Menupictures/countrydelight.jpeg";
import Double from "./Menupictures/dinnerdouble.jpeg";
import Oreo from "./Menupictures/oreocake.jpeg";

export const FoodItemData = [
	{ id: 1, title: "Buttermilk Pancakes", image: Pancake, category: "Breakfast" },
	{ id: 2, title: "Godzilla Milkshake ", image: Shake, category: "Lunch" },
	{ id: 3, title: "Egg Attacks", image: Eggs, category: "Breakfast" },
	{ id: 4, title: "Bacon Overflow", image: Bacon, category: "Lunch" },
	{ id: 5, title: " Diner Double", image: Double, category: "Lunch" },
	{ id: 6, title: "Country Delight", image: CountryDelight, category: "Shakes" },
	{ id: 7, title: "Oreo Classic", image: Oreo, category: "Shakes" },
	{ id: 8, title: " American Classic", image: AmericaDish, category: "Breakfast" },
];

export const FoodCategoryData = [
	{ id: 1, category: "All" },
	{ id: 2, category: "Breakfast" },
	{ id: 3, category: "Lunch" },
	{ id: 4, category: "Shakes" },
];
