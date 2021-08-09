import React from "react";
import "./DropDownToggleButton.css";

const DropDownToggleButton = ({ handleSideBarToggle }) => {
  return (
    <button className="toggle-button" onClick={handleSideBarToggle}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default DropDownToggleButton;
