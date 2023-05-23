import React from "react";
import FoodItem from "./FoodItem";
import TitleData from "./TitleData";

const MainBody = ({ ontoggleAddItem, onaddItem }) => {
  return (
    <div className="fooditem-container">
      {TitleData.map((item, index) => {
        const foodItems = onaddItem.find(x => x.id === item.id);
        return (
          <FoodItem
          ontoggleAddItem={ontoggleAddItem}
            Item={item}
            onfoodItem={foodItems}
            index={index}
            image={item.image}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
export default MainBody;
