import React from "react";
import "./feature.css";

interface information {
  tittle: string;
  text: string;
}

const Feature = ({ tittle, text }: information) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-tittle">
        <div />
        <h1>{tittle}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
