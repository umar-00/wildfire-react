import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import SideBarToggleButton from "./SideBarToggleButton";

const Header = ({ handleRadioChange, handleSideBarToggle }) => {
  return (
    <header className="header">
      <h1>
        <Icon className="header-icon" icon={locationIcon} /> Disaster Events
        Tracker
      </h1>
      <div className="radio-container">
        <input
          type="radio"
          value="wildfires"
          name="disaster"
          defaultChecked
          onChange={handleRadioChange}
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
          onChange={handleRadioChange}
          id="Storm"
        />{" "}
        <label htmlFor="Storm">
          <span>Storms</span>
        </label>
        <input
          type="radio"
          value="volcanoes"
          name="disaster"
          onChange={handleRadioChange}
          id="Volcano"
        />
        {""}
        <label htmlFor="Volcano">
          <span>Volcanoes</span>
        </label>
      </div>

      {/* <div className="menu-button"></div> */}
      <SideBarToggleButton handleSideBarToggle={handleSideBarToggle} />
    </header>
  );
};

export default Header;
