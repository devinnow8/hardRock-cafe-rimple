import React from "react";
import FoodItem from "./FoodItem";
import TitleData from "./TitleData";
import { useState } from "react";

const MainBody = () => {
  return (
    <div className="food_item_container">
      {TitleData.map((heading) => {
        return <FoodItem image={heading.image} title={heading.title} />;
      })}
    </div>
  );
};
export default MainBody;
