import React, { useEffect, useState } from "react";
import "./FoodItem.css";

const FoodItem = ({ image, title }) => {

  const [itemCounter, setItemCounter] = useState(1)

  useEffect(() => {
    localStorage.setItem('item-counter', itemCounter)
  }, [itemCounter])

  const handleItemCount = (isSubtract) => {
    if (isSubtract === true) {
      if (itemCounter === 1) return
      setItemCounter(prevState => prevState - 1)
    }
    else setItemCounter(prevState => prevState + 1)
  }

  return (
    <div className="single_card">
      <div className="food_image">
        <img className=" food-picture" src={image} style={{ width: " 140px" }} />
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
          <button className="add-item">Add +</button>
          <div className="item-counter">
            <button onClick={() => handleItemCount(false)}>+</button>
            {itemCounter}
            <button onClick={() => handleItemCount(true)}>-</button>
          </div>
        </span>
      </div>
    </div>
  );
};
export default FoodItem;
