// src/components/CitySearch.js

import { useState, useEffect } from "react";
import { InfoAlert } from './components/Alert';

  //create CitySearch component using allLocations as parameter
const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);
  
  //create showSuggestions item and set state as empty array when query is empty 
 const [showSuggestions, setShowSuggestions] = useState(false);
 const [query, setQuery] = useState("");
 const [suggestions, setSuggestions] = useState([]);
 
 // change state when event is added and filter locations based value (textContent, user input) 
const handleInputChanged = (event) => {
  const value = event.target.value;
  const filteredLocations = allLocations ? allLocations.filter((location) => {
    return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
  }) : [];
  setQuery(value);
  setSuggestions(filteredLocations);

  let infoText;
  if (filteredLocations.length === 0) {
    infoText = "We can not find the city you are looking for. Please try another city"
  } else {
    infoText = ""
  }
    setInfoAlert(infoText);
};

   //Hide the list when an event is selected by the user
const handleItemClicked = (event) => {
  const value = event.target.textContent;
  setQuery(value);
  setShowSuggestions(false); // to hide the list
  setCurrentCity(value);
  setInfoAlert("");
  };

return (
  <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          })}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
        : null
      }
  </div>
 )
}

export default CitySearch;