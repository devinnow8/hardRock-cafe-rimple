import React from "react";
const TitleHead = ({ title, image }) => {
  return (
    <div>
      {" "}
      <h3> {title} </h3>
      <img src={image} />
      <h6> Price: $150</h6>
      <p>
        {" "}
        Enriched bleached flour (wheat flour, malted barley flour, niacin,
        reduced iron, thiamin mononitrate, riboflavin, folic acid), sugar,
        dextrose, leavening (baking soda, sodium aluminum phosphate, monocalcium
        phosphate), food starch-modified, salt, soybean oil, egg whites,
        buttermilk.
      </p>
      <span>
        {" "}
        <button> Add</button>
      </span>
      <span>
        {" "}
        <button>+</button>
        <button>-</button>
      </span>
    </div>
  );
};
export default TitleHead;
