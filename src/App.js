import React, { useState, useEffect } from "react";
import Map from "./components/Map/Map";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
// import BackDrop from "./components/BackDrop/BackDrop";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [disasterEvent, setDisasterEvent] = useState("wildfires");
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    // handleRadioChange();

    fetchEvents();
  }, []);

  const handleRadioChange = (e) => {
    setDisasterEvent(e.target.value);
  };

  // console.log(eventData);
  // console.log(disasterEvent);
  // console.log(sideBarOpen);

  return (
    <div>
      <Header
        handleRadioChange={handleRadioChange}
        handleSideBarToggle={() => setSideBarOpen((prevState) => !prevState)}
      />
      <SideBar
        handleSideBarToggle={() => setSideBarOpen(false)}
        show={sideBarOpen}
      />
      {/* {sideBarOpen && (
        <BackDrop handleSideBarToggle={() => setSideBarOpen(false)} />
      )} */}

      <div>
        {!loading ? (
          <Map
            eventData={eventData}
            eventSelection={disasterEvent}
            handleSideBarToggle={() => setSideBarOpen(false)}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
