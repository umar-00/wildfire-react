import React from "react";

import "./SideBar.css";

const SideBar = ({ handleSideBarToggle, show }) => {
  let sideBarClasses = "side-bar";
  if (show) {
    sideBarClasses = "side-bar open";
  }

  return (
    <nav className={sideBarClasses}>
      <div className="radio-container-side-bar">
        <input
          type="radio"
          value="wildfires"
          name="disaster"
          // onChange={handleChange}
          id="Wildfire"
        />
        {""}
        <label htmlFor="Wildfire" onClick={handleSideBarToggle}>
          <span> Wildfires </span>
        </label>
        <input
          type="radio"
          value="storms"
          name="disaster"
          // onChange={handleChange}
          id="Storm"
        />{" "}
        <label htmlFor="Storm" onClick={handleSideBarToggle}>
          <span>Storms</span>
        </label>
        <input
          type="radio"
          value="volcanoes"
          name="disaster"
          // onChange={handleChange}
          id="Volcano"
        />
        {""}
        <label htmlFor="Volcano" onClick={handleSideBarToggle}>
          <span>Volcanoes</span>
        </label>
      </div>
    </nav>
  );
};

export default SideBar;
