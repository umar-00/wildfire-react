import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA2tNwWfXkysXss4JleY7SX1SaZJbK93Bc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 53.0793,
    lng: 8.8017,
  },
  zoom: 6,
};

export default Map;
