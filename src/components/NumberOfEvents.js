import React, { useState } from "react";

const NumberOfEvents = () => {
    const handleInputChanged = (event)  => {
        const value = event.target.value;
    };

    return (
        <div id="number-of-events">
            <input
                type="text"
                className="number-of-events"
                defaultValue="32"
                onChange={handleInputChanged}
            />
        </div>
    );
}

export default NumberOfEvents;
