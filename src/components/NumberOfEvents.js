import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event)  => {
        const value = event.target.value;
        setCurrentNOE(value);
    

    let errorText;
    if (isNaN(value) || value <= 0) {
        errorText = 'Please enter a number greater than 0';
        setErrorAlert(errorText);
    } else {
        setCurrentNOE(value);
    }
};

    return (
        <div data-test-id="number-of-events">
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
