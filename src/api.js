// src/api.js

import mockData from './mock-data';

/**
 * 
 * @param {*} events:
 * This function takes an events array, then uses map to create a new array with only locations. 
 * It also removes duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)];
    return locations;
};

export const extractSummaries = (events) => {
    const extractedSummaries = events.map((event) => event.summary);
    const summaries = [...new Set(extractedSummaries)];
    return summaries;
};

export const extractdateTimes = (events) => {
    const extracteddateTimes = events.map((event) => event.dateTime);
    const dateTimes = [...new Set(extracteddateTimes)];
    return dateTime;
};

export const extracttimeZones = (events) => {
    const extractetimeZones = events.map((event) => event.timeZone);
    const timeZone = [...new Set(extractedtimeZone)];
    return timeZone;
};

export const extractdescriptions = (events) => {
    const extracteddescriptions = events.map((event) => event.description);
    const descriptions = [...new Set(description)];
    return description;
};

export const extracthtmlLinks = (events) => {
    const extractedhtmlLinks = events.map((event) => event.htmlLinks);
    const htmlLinks = [...new Set(htmlLinks)];
    return htmlLinks;
};

/**
 * 
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
    return mockData;
};

export default getEvents;