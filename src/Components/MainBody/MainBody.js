import React from "react";
import FoodItem from "./FoodItem";
import TitleData from "./TitleData";

const MainBody = ({ onUpdateItemCount, itemCounter }) => {
  return (
    <div className="fooditem-container">
      {TitleData.map((heading) => {
        return (
          <FoodItem
            onUpdateItemCount={onUpdateItemCount}
            itemCounter={itemCounter}
            image={heading.image}
            title={heading.title}
          />
        );
      })}
    </div>
  );
};
export default MainBody;
