// src/components/Event.js
import { useState } from "react";
import { getEvents } from '.../api';

const Event = ( {getEvents} ) => {
  
  const [showDetails, setShowDetails] = useState(false);
  const [button, setButton] = useState([]);

  const handleInputChanged = (showDetails) => {
    const value = showDetails.target.value;
    const showDetails = allSummaries ? allSummaries.filter((summary) => {
      return summary;
    }
  }
  
  return (
    <div id="event">
      <input 
        type="text"
        className="event info"
      />
      {showDetails ?
      }

    </div>
  );
}

export default Event;