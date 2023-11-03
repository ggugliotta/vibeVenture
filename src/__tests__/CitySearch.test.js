// src/_tests_/CitySearch.test.js

import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from "../App";
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
   let CitySearchComponent;
   beforeEach(() => {
    CitySearchComponent = render(<CitySearch 
      allLocations={[]} 
      setCurrentCity={() => {}}
      setInfoAlert ={() => { }}
       />);
   });
   
   test('renders text input', () => {
     const cityTextBox = CitySearchComponent.queryByRole('textbox');
     expect(cityTextBox).toBeInTheDocument();
     expect(cityTextBox).toHaveClass('city');
    });

   test('suggestions list is hidden by default', () => {
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
   });

   test('renders a list of suggestions when city textbox gains focus', async () => {
    //User Interaction Setup
    const user = userEvent.setup();
    //Textbox Exists
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    // Simulate user clicking on textbox
    await user.click(cityTextBox);
    //SuggestionList exists
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
   });

   test('updates list of suggestions correctly when user types in city textbox', async () => {
      //User Interaction Setup
      const user = userEvent.setup();
      //Load getEvents from api.js (function that returns mockData)
      const allEvents = await getEvents();
      // Get extractLocations from api.js (function creates new arrary from mockData with only locations) for all events
      const allLocations = extractLocations(allEvents);
      // Rerender CitySearch with all locations available to search
      CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setInfoAlert ={() => { }} />);

      //user types "Berlin" in city textbox
      const cityTextBox = CitySearchComponent.queryByRole('textbox');
      await user.type(cityTextBox, "Berlin");

      //filter allLocations to locations matching "Berlin"
      const suggestions = allLocations? allLocations.filter((location) => {
         return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
      }): [];

      // get all <li> elements inside the suggestion list
      const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
      expect(suggestionListItems).toHaveLength(suggestions.length + 1);
      for (let i = 0; i < suggestions.length; i += 1) {
         expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
      }
   });
   test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
     const user = userEvent.setup();
     const allEvents = await getEvents(); 
     const allLocations = extractLocations(allEvents);
     CitySearchComponent.rerender(<CitySearch 
      allLocations={allLocations} 
      setCurrentCity={() => { }} 
      setInfoAlert ={() => { }}
      />);

     const cityTextBox = CitySearchComponent.queryByRole('textbox');
     await user.type(cityTextBox, "Berlin");

    // the suggestion's textContent look like this: "Berlin, Germany"
     const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

     await user.click(BerlinGermanySuggestion);

     expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });

});

describe('<CitySearch /> integration', () => {
   test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    await waitFor(() => {
      const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
      expect(suggestionListItems.length).toBe(allLocations.length + 1);
    });
  });
});