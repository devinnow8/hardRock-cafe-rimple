import React from "react";
import FoodItem from "./FoodItem";
import TitleData from "./TitleData";

const MainBody = ({
  ontoggleAddItem,
  onaddItem,
  ontoggleRemoveItem,
  onbuttondisableItem,
  disableItem
 
}) => {
  return (
    <div className="fooditem-container">
      {TitleData.map((item, index) => {
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
            onbuttondisableItem={onbuttondisableItem}
            ondisableItem={disableItem}
          
          />
        );
      })}
    </div>
  );
};
export default MainBody;
