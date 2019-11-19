import React, { useState } from "react";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import "./Palette.css";

export const Palette = props => {
  const { colors } = props.palette;

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = colors[level].map(color => (
    <ColorBox background={color[format]} name={color.name} />
  ));

  const changeLevel = lvl => {
    setLevel(lvl);
  };

  const changeFormat = val => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleSelect={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/*Footer eventually */}
    </div>
  );
};
