import React from "react";
import TitleHead from "./TitleHead";
import TitleData from "./TitleData";

const MainBody = () => {
  return (
    <div>
      <div>
        <div className="Title">
          {TitleData.map((heading) => {
            return <TitleHead title={heading.title} image={heading.image} />;
          })}
        </div>
        <hr />
      </div>
      <div>
        {" "}
        
      </div>
      
    </div>
  );
};
export default MainBody;
