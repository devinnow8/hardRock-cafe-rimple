import React from "react";
import FoodItem from "./FoodItem";
                    

const MainBody = ({
  ontoggleAddItem,
  onaddItem,
  ontoggleRemoveItem,
  FoodItemData


}) => {
  return (
    <div className="fooditem-container">
      {FoodItemData.map((item, index) => {
        const foodItems = onaddItem.find((x) => x.id === item.id);
        return (
          <FoodItem
            ontoggleAddItem={ontoggleAddItem}
            item={item}
            onfoodItem={foodItems}
            index={index}
            image={item.image}
            title={item.title}
            ontoggleRemoveItem={ontoggleRemoveItem}
            
            
          />
        );
      })}
    </div>
  );
};
export default MainBody;
