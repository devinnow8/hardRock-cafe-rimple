import React from "react";
import "./FoodItem.css";

const FoodItem = ({
  image,
  title,
  ontoggleAddItem,
  index,
  onfoodItem,
  item,
  ontoggleRemoveItem,
  onbuttondisableItem,
  ondisableItem,
}) => {
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
          {ondisableItem ? (
            <button
              className="add-item"
              onClick={() => {
                ontoggleAddItem(item);
                onbuttondisableItem();
              }}
            >
              Add +
            </button>
          ) : (
            <button
              className="add-item"
              onClick={() => {
                ontoggleAddItem();
                onbuttondisableItem();
                {
                  onfoodItem.count = 0;
                }
              }}
            >
              Remove
            </button>
          )}
          {onfoodItem && (
            <div className="item-counter">
              <button
                className="add-to-cart"
                onClick={() => ontoggleAddItem(item)}
              >
                +
              </button>
              {onfoodItem.count}
              <button
                className=" add-to-cart"
                onClick={() => ontoggleRemoveItem(index)}
              >
                -
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
export default FoodItem;
