Feature: Specify Number of Events

 Scenario: When a user hasn't specified a number, 32 events are shown by default. 
   Given that the main page is open;
   When a user opens the app; 
   Then 32 events will be shown by default.

 Scenario: User can change the number of events displayed. 
   Given that a specific city event results are showing; 
   When a user clicks submit on the search bar to filter for a specific city; 
   Then an optional setting will show up below to specify the number of events to display.