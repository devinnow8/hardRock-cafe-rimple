import React from "react";
import "./FoodItem.css";

const FoodItem = ({ image, title, onUpdateItemCount, itemCounter }) => {
  return (
    <div className="single-card">
      <div className="food-image">
        <img
          className=" food-picture"
          src={image}
          style={{ width: " 140px" }}
          alt={""}
        />
      </div>{" "}
      <div className="paragraph">
        <div className="food-title">
          <h3> {title} </h3>
          <h6> Price: $150</h6>
        </div>

        <hr style={{ width: "100%" }} />
        <span>
          <h5>
            Enriched bleached flour (wheat flour, malted barley flour, niacin,
            reduced iron, thiamin mononitrate, riboflavin, folic acid), sugar,
            dextrose, leavening (baking soda, sodium aluminum phosphate,
            monocalcium phosphate), food starch-modified, salt, soybean oil, egg
            whites, buttermilk.
          </h5>{" "}
        </span>
        <span className="add-moreitems">
          {" "}
          <button className="add-item">Add +</button>
          <div className="item-counter">
            <button
              className="add-to-cart"
              onClick={() => onUpdateItemCount(false)}
            >
              +
            </button>
            {(itemCounter = 1)}
            <button
              className=" add-to-cart"
              onClick={() => onUpdateItemCount(true)}
            >
              -
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};
export default FoodItem;
