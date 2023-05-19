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
            borderRadius: "50%",
            color: "pink",
          }}
        >
          {" "}
        </a>
        <a
          href="/"
          className="fa fa-twitter"
          style={{
            borderRadius: "50%",
            color: "pink",
          }}
        ></a>
        <a
          href="/"
          className="fa fa-google"
          style={{
            borderRadius: "50%",
            color: "pink",
          }}
        ></a>
        <a
          href="/"
          className="fa fa-instagram"
          style={{
            borderRadius: "50%",
            color: "pink",
          }}
        >
          {" "}
        </a>
      </div>

      <div className="copyright-terms">
        <a href="/" className=" fa fa-copyright" style={{ color: "white" }}></a>
        <h6> Copyright. All rights reserved</h6>
      </div>
    </div>
  );
};
export default SocialButtons;
