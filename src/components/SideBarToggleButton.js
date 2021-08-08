import React from "react";

const SideBarToggleButton = ({ handleSideBarToggle }) => {
  return (
    <button className="toggle-button" onClick={handleSideBarToggle}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default SideBarToggleButton;
