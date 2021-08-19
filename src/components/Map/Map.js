import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "../LocationMarker/LocationMarker";
import LocationInfoModal from "../LocationInfoModal/LocationInfoModal";

// CSS
import "./Map.css";

// Icons
import fireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-carbon/thunderstorm-severe";
import volcanoIcon from "@iconify/icons-maki/mountain";

const Map = ({
  eventData,
  center,
  zoom,
  eventSelection,
  handleSideBarToggle,
}) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [show, setShow] = useState(false);

  // console.log(eventData[0]);

  // console.log(eventSelection);

  return (
    <div className="map" onClick={handleSideBarToggle}>
      <GoogleMapReact
        onClick={() => setShow(false)}
        bootstrapURLKeys={{ key: "AIzaSyA2tNwWfXkysXss4JleY7SX1SaZJbK93Bc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Check input from radio button, and render location markers at event coordinates */}
        {eventSelection === "wildfires" &&
          eventData.map((event) =>
            event.categories[0].id === 8 ? (
              <LocationMarker
                key={event.id}
                lat={event.geometries[0].coordinates[1]}
                lng={event.geometries[0].coordinates[0]}
                icon={fireIcon}
                onClick={(e) => {
                  console.log(e);
                  // e.preventDefault();
                  setLocationInfo({ id: event.id, title: event.title });
                  setShow(true);
                }}
              />
            ) : null
          )}
        {eventSelection === "storms" &&
          eventData.map((event) =>
            event.categories[0].id === 10 ? (
              <LocationMarker
                key={event.id}
                lat={event.geometries[0].coordinates[1]}
                lng={event.geometries[0].coordinates[0]}
                icon={stormIcon}
                onClick={() => {
                  setLocationInfo({ id: event.id, title: event.title });
                  setShow(true);
                }}
              />
            ) : null
          )}
        {/* Volcanoes events that have a 2d coordinate array (from api) are mapped seperately */}
        {eventSelection === "volcanoes" &&
          eventData.map((event) =>
            event.categories[0].id === 12 ? (
              event.geometries[0].type === "Polygon" ? (
                event.geometries[0].coordinates[0].map((location) => (
                  <LocationMarker
                    key={Math.floor(Math.random() * 10000)}
                    lat={location[1]}
                    lng={location[0]}
                    icon={volcanoIcon}
                    onClick={() => {
                      setLocationInfo({ id: event.id, title: event.title });
                      setShow(true);
                    }}
                  />
                ))
              ) : (
                <LocationMarker
                  key={event.id}
                  lat={event.geometries[0].coordinates[1]}
                  lng={event.geometries[0].coordinates[0]}
                  icon={volcanoIcon}
                  onClick={() => {
                    setLocationInfo({ id: event.id, title: event.title });
                    setShow(true);
                  }}
                />
              )
            ) : null
          )}
      </GoogleMapReact>

      {locationInfo && (
        <LocationInfoModal
          info={locationInfo}
          onClick={() => setShow(false)}
          show={show}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 53.0793,
    lng: 8.8017,
  },
  zoom: 4,
};

export default Map;
