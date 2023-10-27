Feature: Show/Hide Event Details
 
 Scenario: An event element is collapsed by default. 
   Given that the user is viewing events for a filtered city
   When a user scrolls down the results page
   Then the events element is collapsed by default to show limited information.

 Scenario: User can expand an event to see details. 
   Given that the event element is collapsed by default
   When a user clicks on the element
   Then the user should be able to open the event element to show more details.

 Scenario: User can collapse an event to hide details. 
   Given that the event element is open
   When a user clicks on the event element
   Then the user should be able to collapse the event element to show less details.