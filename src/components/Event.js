// src/components/Event.js
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <div>{event.summary}</div>
      <div>{event.created}</div>
      <div>{event.timeZone}</div>
      <div>{event.location}</div>
      {showDetails ? (
        <div className="details">
          <p>About: {event.description};</p>
          <p>Link to Google Calendar:{event.htmlLink} </p>
        </div>
      ) : null}
      <button
        className="show-details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? "hide details" : "show details"}
      </button>
    </li>
  );
};

export default Event;
