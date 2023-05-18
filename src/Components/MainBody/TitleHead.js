import React from "react";
import "./TitleHead.css";
const TitleHead = ({ image, title }) => {
  return (
    <div className="single_card">
      <div className="food_image">
        <img src={image} style={{ width: " 140px" }} />
      </div>{" "}
      <div className="paragraph">
        <div className=" food-title">
          {" "}
          <h3> {title} </h3>
          <h6> Price: $150</h6>
        </div>

        <hr style={{ width: "100%" }} />
        <span>
          <h5>
            {" "}
            Enriched bleached flour (wheat flour, malted barley flour, niacin,
            reduced iron, thiamin mononitrate, riboflavin, folic acid), sugar,
            dextrose, leavening (baking soda, sodium aluminum phosphate,
            monocalcium phosphate), food starch-modified, salt, soybean oil, egg
            whites, buttermilk.
          </h5>{" "}
          
        </span>
        <span>
          {" "}
          <button> Add</button>
          <button>+</button>
          <button>-</button>
        </span>
      </div>
    </div>
  );
};
export default TitleHead;
