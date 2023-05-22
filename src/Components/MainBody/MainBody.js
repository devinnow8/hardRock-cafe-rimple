import React from "react";
import FoodItem from "./FoodItem";
import TitleData from "./TitleData";


const MainBody = ({onUpdateItemCount}) => {
  return (
    <div className="food_item_container">
      {TitleData.map((heading) => {
        return <FoodItem onUpdateItemCount={onUpdateItemCount} image={heading.image} title={heading.title} />;
      })}
    </div>
  );
};
export default MainBody;
