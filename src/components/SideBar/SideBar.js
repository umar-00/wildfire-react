import React from "react";

import "./SideBar.css";

const SideBar = ({}) => {
  return (
    <nav className="side-bar">
      <div className="radio-container-side-bar">
        <input
          type="radio"
          value="wildfires"
          name="disaster"
          defaultChecked
          // onChange={handleChange}
          id="Wildfire"
        />
        {""}
        <label htmlFor="Wildfire">
          <span> Wildfires </span>
        </label>
        <input
          type="radio"
          value="storms"
          name="disaster"
          // onChange={handleChange}
          id="Storm"
        />{" "}
        <label htmlFor="Storm">
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
        <label htmlFor="Volcano">
          <span>Volcanoes</span>
        </label>
      </div>
    </nav>
  );
};

export default SideBar;
