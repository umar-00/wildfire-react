import React from "react";

const SideBar = ({ handleChange }) => {
  return (
    <nav>
      <div className="radio-container">
        <input
          type="radio"
          value="wildfires"
          name="disaster"
          defaultChecked
          onChange={handleChange}
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
          onChange={handleChange}
          id="Storm"
        />{" "}
        <label htmlFor="Storm">
          <span>Storms</span>
        </label>
        <input
          type="radio"
          value="volcanoes"
          name="disaster"
          onChange={handleChange}
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
