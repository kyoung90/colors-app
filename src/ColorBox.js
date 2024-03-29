import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

export const ColorBox = ({ name, background }) => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className="ColorBox">
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied ? "show" : ""}`}
        />
        <div className={`copy-msg ${copied ? "show" : ""}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
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
