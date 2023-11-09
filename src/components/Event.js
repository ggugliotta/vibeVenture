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
        </div>
      ) : null}
   
    </li>
  );
};

export default Event;
 //<p>
           //<a href="https://calendar.google.com/calendar/r/eventedit?text=Test&dates=20210914T170000Z/20210914T180000Z&details=Test&location=Test&sf=true&output=xml"
           // target="_blank">Add to your calendar</a>
          //</p>
