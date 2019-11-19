import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

export const ColorBox = ({ name, background }) => {
  return (
    <CopyToClipboard text={background}>
      <div style={{ background: background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  );
};
