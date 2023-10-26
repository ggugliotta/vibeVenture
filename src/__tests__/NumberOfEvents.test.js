// src/_tests_/NumberOfEvents.test.js

import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
  });

  test("renders text input", () => {
   const input = NumberOfEventsComponent.queryByRole('textbox');
   expect(input).toBeInTheDocument();
  });

  test("number of events is 32 by default", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input).toHaveValue("32");
  });

  test("updates textbox correctly when user types in NumberOfEvents textbox", async () => {
    //User Interaction Setup
    const user = userEvent.setup();
    //user types "10" in NumberOfEvents textbox
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(input, '{backspace}{backspace}10');
    // Rerender NumberOfEvents with user input
    expect(input).toHaveValue("10");
  });
});

describe('<NumberOfEvents /> integration', () => {
  test("selected number of events by the user are rendered when the app opens", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
    await userEvent.type(NumberOfEventsInput, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
      within(EventListDOM).queryAllByRole("listitem");
    expect(allRenderedEventItems.length).toEqual(10);
  });
});
