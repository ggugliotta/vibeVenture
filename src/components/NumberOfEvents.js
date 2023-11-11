import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event)  => {
        const value = event.target.value;
    
    if (isNaN(value)) {
        errorText = 'Please enter a number greater than 0';
    } else if ( value > 50 ) {
        setErrorAlert('maximum value is 50');
    } else if (value <= 0) {
        setErrorAlert('minimum value is 1');
    } else {
        setErrorAlert('');
        setCurrentNOE(value);
    }
};

    return (
        <div data-test-id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid = "numberOfEventsInput"
            />
        </div>
    );
};

export default NumberOfEvents;
