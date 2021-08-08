import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoModal from "./LocationInfoModal";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [show, setShow] = useState(false);
  // const isModalRef = useRef(true);

  // console.log(isModalRef);
  // console.log(eventData[0]);

  return (
    <div className="map">
      <GoogleMapReact
        onClick={() => setShow(false)}
        bootstrapURLKeys={{ key: "AIzaSyA2tNwWfXkysXss4JleY7SX1SaZJbK93Bc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {eventData.map((event) =>
          event.categories[0].id === 8 ? (
            <LocationMarker
              key={event.id}
              lat={event.geometries[0].coordinates[1]}
              lng={event.geometries[0].coordinates[0]}
              onClick={() => {
                setLocationInfo({ id: event.id, title: event.title });
                setShow(true);
              }}
            />
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
