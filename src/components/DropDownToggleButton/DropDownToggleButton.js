import React from "react";
import "./DropDownToggleButton.css";

const DropDownToggleButton = ({ toggleClick }) => {
  return (
    <button className="toggle-button" onClick={toggleClick}>
      {" "}
      Select Disaster Event ▼
      {/* <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" /> */}
    </button>
  );
};

export default DropDownToggleButton;
