// src/components/Event.js
import { useState } from "react";
import { getEvents, extractSummaries, extractdateTimes, extracttimeZones, extractlocations, extractdescriptions, extracthtmlLinks  } from "../api.js";

const Event = ( { getEvents } ) => {
  
  const [showDetails, setShowDetails] = useState(false);


  return (
    <li>
      <div className="event">
        <h3>{getEvents.extractSummaries}</h3>
        <p>{getEvents.extractdateTimes}</p>
        <p>{getEvents.extracttimeZones}</p>
        <p>{getEvents.extractlocations}</p>
        <button 
          className="show-details-btn"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          { showDetails ? 'Hide Details': 'Show Details'}
        </button>
        {showDetails && <div className="detailsOpened"></div>}
            <p>About: {getEvents.extractdescriptions};</p>
            <p>Link to Google Calendar:{getEvents.extracthtmlLinks} </p>
        </div>
    </li>
  )
  
};

export default Event;