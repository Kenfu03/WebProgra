import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="posibility">
      <div className="gpt3__possibility-container">
        <div className="gpt3__possibility-img_container">
          <img src={possibility} alt="possibility" />
        </div>
        <div className="gpt3__possibility-text_container">
          <p className="p1">Request Early Access to Get Started</p>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p className="p2">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="p3">Request Early Access to Get Started</p>
        </div>
      </div>
      <div className="gpt3__possibility-register">
        <div className="gpt3__possibility-register_text">
          <p className="register_small-text">Request Early Access to Get Started</p>
          <p className="register_big-text">Register today & start exploring the endless possiblities.</p>
        </div>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default Possibility;
