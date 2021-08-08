import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [disasterEvent, setDisasterEvent] = useState("wildfires");

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

  // console.log(disasterEvent);

  // console.log(eventData);

  return (
    <div>
      <Header handleChange={handleRadioChange} />
      <SideBar />
      <div>
        {!loading ? (
          <Map eventData={eventData} eventSelection={disasterEvent} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
