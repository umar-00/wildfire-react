import { Icon } from "@iconify/react";
import "./LocationMarker.css";

const LocationMarker = ({ lat, lng, onClick, icon }) => {
  return (
    <div className="location-marker" onTouchEnd={onClick} onClick={onClick}>
      <Icon icon={icon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
