import React from "react";
import TitleHead from "./TitleHead";
import {TitleData} from "../Data/Data.js";

const MainBody = () => {
  return (
    <div>
      <div>
        <div className="food_item_container">
          {TitleData.map((heading) => {
            return <TitleHead image={heading.image} title={heading.title} />;
          })}
        </div>
        <hr />
      </div>
      <div> </div>
    </div>
  );
};
export default MainBody;
