import React from "react";
import "./BackDrop.css";

const BackDrop = ({ handleSideBarToggle }) => {
  return <div className="backdrop" onClick={handleSideBarToggle}></div>;
};

export default BackDrop;
