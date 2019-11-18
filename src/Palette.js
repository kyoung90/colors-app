import React from "react";
import { ColorBox } from "./ColorBox";
import "./Palette.css"

export const Palette = props => {
  const colorBoxes = props.colors.map(color => <ColorBox background={color.color} name={color.name} />);
  return (
    <div className="Palette">
      {/* {Navbar goes here} */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/*Footer eventually */}
    </div>
  );
};
