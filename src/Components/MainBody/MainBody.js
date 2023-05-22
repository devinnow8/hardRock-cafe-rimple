import React from "react";
import FoodItem from "./FoodItem";
import FoodItemData from "./FoodItemData";

const MainBody = ({ cartItems, onAddItems, onRemoveItems }) => {
  return (
    <div className="fooditem-container">
      {FoodItemData.map((item, index) => {
        const foodItem = cartItems.find(x => x.id === item.id)
        return (
          <FoodItem
            index={index}
            foodItem={foodItem}
            item={item}
            onAddItems={onAddItems}
            onRemoveItems={onRemoveItems}
            image={item.image}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
export default MainBody;
