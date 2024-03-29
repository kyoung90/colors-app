import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import IconButton from "@material-ui/core/IconButton";

export const Navbar = ({ level, changeLevel, handleSelect }) => {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);

  const handleFormatChange = event => {
    setOpen(true);
    setFormat(event.target.value);
    handleSelect(event.target.value);
  };

  const closeSnackbar = () => {
    setOpen(false);
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
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 210, 10)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 210, 10, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}!</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon></CloseIcon>
          </IconButton>
        ]}
      />
    </header>
  );
};
