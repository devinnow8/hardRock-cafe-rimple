import React from "react";
import FoodItem from "./FoodItem";

const MainBody = ({
  onToggleAddItem,
  selectedItems,
  onToggleRemoveItem,
  foodItems,
}) => {
  return (
    <div className="fooditem-container">
      {foodItems.map((item, index) => {
        const foodItems = selectedItems.find((x) => x.id === item.id);
        return (
          <FoodItem
            onToggleAddItem={onToggleAddItem}
            item={item}
            onfoodItem={foodItems}
            index={index}
            image={item.image}
            title={item.title}
            onToggleRemoveItem={onToggleRemoveItem}
          />
        );
      })}
    </div>
  );
};
export default MainBody;
