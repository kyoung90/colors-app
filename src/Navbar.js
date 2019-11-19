import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export const Navbar = ({ level, changeLevel, handleSelect }) => {
  const [format, setFormat] = useState("hex");

  const handleChange = event => {
    setFormat(event.target.value);
    handleSelect(event.target.value);
  };
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">React Color Picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 210, 10)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 210, 10, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};
