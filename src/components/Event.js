// src/components/Event.js
import { useState } from "react";
import './Event.css';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <div>{event.summary}</div>
      <div>{event.created}</div>
      <div>{event.timeZone}</div>
      <div>{event.location}</div>
      <button className="show-details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>About: {event.description};</p>
          <p>Add to Calendar:{event.htmlLink} </p>
        </div>
      ) : null}
   
    </li>
  );
};

export default Event;
