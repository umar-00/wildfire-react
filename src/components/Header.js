import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import searchIcon from "@iconify/icons-bx/bx-search-alt";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon className="header-icon" icon={locationIcon} /> Wildfire Tracker
        (Powered by NASA)
      </h1>
      <div className="radio-container">
        <input type="radio" id="html" value="wildfires" defaultChecked></input> 
        {""}
        <label for="html">Wildfires</label>
        {/* <br></br> */}
        <input type="radio" id="html" value="severe-storms"></input> {""}
        <label for="html">Severe Storms</label>
        {/* <br></br> */}
        <input type="radio" id="html" value="volcanoes"></input> {""}
        <label for="html">Volcanoes</label>
        {/* <br></br> */}
      </div>
    </header>
  );
};

export default Header;
