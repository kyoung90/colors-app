import React from "react";

export const ColorBox = props => {
  return (
    <div style={{ background: props.background }} className="ColorBox">
      <span>{props.name}</span>
      <span>MORE</span>
    </div>
  );
};
