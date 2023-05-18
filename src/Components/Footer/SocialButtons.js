import React from "react";
import "./SocialButtons.css";
const SocialButtons = () => {
  return (
    <div>
      <div className="social-site">
        <a
          href="/"
          className="fa fa-facebook"
          style={{
            border: "1px solid rgb(233, 230, 230)",
            borderRadius: "60%",
          }}
        >
          {" "}
        </a>
        <a
          href="/"
          className="fa fa-twitter"
          style={{
            border: "1px solid rgb(233, 230, 230)",
            borderRadius: "50%",
          }}
        ></a>
        <a
          href="/"
          className="fa fa-google"
          style={{
            border: "1px solid rgb(233, 230, 230)",
            borderRadius: "50%",
          }}
        ></a>
        <a
          href="/"
          className="fa fa-instagram"
          style={{
            border: "1px solid rgb(233, 230, 230)",
            borderRadius: "50%",
          }}
        >
          {" "}
        </a>
      </div>

      <div className="copyright-terms">
        <a href="/" className=" fa fa-copyright"></a>
        <h6> Copyright. All rights reserved</h6>
      </div>
    </div>
  );
};
export default SocialButtons;
