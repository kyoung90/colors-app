import React, { useState } from "react";
import { ColorBox } from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const Palette = props => {
  const { colors } = props.palette;

  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  const changeLevel = lvl => {
    setLevel(lvl);
  };

  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />
      {/* {Navbar goes here} */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/*Footer eventually */}
    </div>
  );
};
