// src/_tests_/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
   let NumberOfEventsComponent;
   beforeEach(() => {
    NumberOfEvents = render(<NumberOfEvents />);
   });

   test('renders text input', () => {
     const NumberOfEventsTextBox = NumberOfEventsComponent.queryByRole('textbox');
     expect(NumberOfEventsTextBox).toBeInTheDocument();
     expect(NumberOfEvents).toHaveClass('number-of-events');
    });

   test('number of events is 32 by default', () => {
    const textbox = NumberOfEventsComponent.queryByRole("textbox");
    expect(textbox.value).toBe("32");
   });

   test('updates textbox correctly when user types in NumberOfEvents textbox', async () => {
      //User Interaction Setup
      const user = userEvent.setup();
      //user types "10" in NumberOfEvents textbox
      const NumberOfEventsTextBox = NumberOfEventsComponent.queryByRole('textbox');
      await user.type(TextInput_Reference_Variable, `{backspace}{backspace}10`);
      // Rerender NumberOfEvents with user input
      NumberOfEventsComponent.rerender(<NumberOfEvents />);
      expect(input).toHaveValue("10");
   });
})