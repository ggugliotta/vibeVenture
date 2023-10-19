// src/components/Event.js
import { useState } from "react";
import { getEvents } from "../api";
import mockData from "../mockdata";

const Event = ( { event } ) => {
  
  const [showDetails, setShowDetails] = useState(false);
 
  return (
    <li>
        <div>{event.summary}</div>
        <div>{ event.dateTime}</div>
        <div>{event.timeZone}</div>
        <div>{event.location}</div>
          {showDetails ? (
            <details open={true} className="detailsOpened">
            <p>About: {event.description};</p>
            <p>Link to Google Calendar:{event.htmlLink} </p>
            </details>
        ) : (
          <details open={false} className = "detailsClosed">
            <p>About: {event.description};</p>
            <p>Link to Google Calendar:{event.htmlLink} </p>
          </details>
        )}
        <button 
          className="show-details-btn"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          { showDetails ? 'Hide Details': 'Show Details'}
        </button>
  
    </li>
  )
  
};

export default Event;