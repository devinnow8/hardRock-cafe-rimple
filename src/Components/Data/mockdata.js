import Pancake from "../MainBody/Menupictures/Pancake.jpeg";
import Shake from "../MainBody/Menupictures/Godzilla milkshake.webp";
import Eggs from "../MainBody/Menupictures/Eggs.png";
import Bacon from "../MainBody/Menupictures/Bacon.jpeg";
import Double from "../MainBody/Menupictures/dinnerdouble.jpeg";
import CountryDelight from "../MainBody/Menupictures/countrydelight.jpeg";
import Oreo from "../MainBody/Menupictures/oreocake.jpeg";
import AmericaDish from "../MainBody/Menupictures/american.jpeg";

export const FoodItemData = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    image: Pancake,
    category: "breakfast",
  },
  { id: 2, title: "Godzilla Milkshake ", image: Shake, category: "lunch" },
  { id: 3, title: "Egg Attacks", image: Eggs, category: "breakfast" },
  { id: 4, title: "Bacon Overflow", image: Bacon, category: "lunch" },
  { id: 5, title: " Diner Double", image: Double, category: "lunch" },
  { id: 6, title: "Country Delight", image: CountryDelight, category: "shake" },
  { id: 7, title: "Oreo Classic", image: Oreo, category: "shake" },
  {
    id: 8,
    title: " American Classic",
    image: AmericaDish,
    category: "breakfast",
  },
];

export const ButtonData = [
  { id: 1, category: "ALL" },
  { id: 2, category: "breakfast" },
  { id: 3, category: "lunch" },
  { id: 4, category: "shake" },
];
