import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event)  => {
        const value = event.target.value;
        setCurrentNOE(value);
    

    let infoText;
    if (isNaN(value) || value <= 0) {
        infoText = 'Please enter a number greater than 0';
        setErrorAlert(infoText)
    } else {
        infoText = "";
        setErrorAlert(infoText);
        setCurrentNOE(value)
       }
    }

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="text"
                className="number-of-events"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid = "numberofeventsInput"
            />
        </div>
    );
}

export default NumberOfEvents;
