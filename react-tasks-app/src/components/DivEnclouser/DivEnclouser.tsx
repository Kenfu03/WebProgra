import React from "react";
import "./DivEnclouser.css";

export const DivEnclouser = (props: any) => {
  return (
    <div className="Decoration_container p-3">
      <div className="horizontal-line divColor" />
      <div className="vertical-line divColor" />
      <div className="aplication">{props.children}</div>
      <div className="horizontal-line2 divColor" />
      <div className="vertical-line2 divColor" />
    </div>
  );
};
