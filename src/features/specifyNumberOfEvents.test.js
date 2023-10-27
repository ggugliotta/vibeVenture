import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    // Scenario 1
     test('When a user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        given('that the main page is open;', () => {
            AppComponent = render(<App />);
        });
        when('a user opens the app;', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            })
        });
        then(/^(\d+) events will be shown by default.$/, (arg0) => {
            expect(eventList.length).toEqual(32);
        });
    });

    // Scenario 2
    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        given('that a specific city event results are showing;', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when('a user clicks submit on the search bar to filter for a specific city;', async () => {
            const button = AppComponent.queryByTestId('numberofEventsInput');
            await userEvent.type(button, "{backspace}{backspace}10");
        });

        then('an optional setting will show up below to specify the number of events to display.', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole("listitem");
            expect(eventList.length).toEqual(10);
        });
    });

});