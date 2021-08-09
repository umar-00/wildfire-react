import "./LocationInfoModal.css";

const LocationInfoModal = ({ info, onClick, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="location-info-modal">
      <h2>Event location info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
      <button className="close-modal-button" onClick={onClick}>
        X
      </button>
    </div>
  );
};

export default LocationInfoModal;
