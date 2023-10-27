import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
      test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('that the user is viewing events for a filtered city', () => {
             AppComponent = render(<App />);
        });


        when('a user scrolls down the results page', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems =
                within(EventListDOM).queryAllByRole("listitem");
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the events element is collapsed by default to show limited information.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        given('that the event element is collapsed by default', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems =
                within(EventListDOM).queryAllByRole("listitem");
                expect(EventListItems.length).toBe(32);
            });
        });

        when('a user clicks on the element', async () => {
            const button = AppComponent.queryAllByText("Show Details Button")[0];
            await userEvent.click(button);
        });

        then('the user should be able to open the event element to show more details.', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('that the event element is open', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);
        });
        when('a user clicks on the event element', async () => {
            await userEvent.click(button);
        });

        then('the user should be able to collapse the event element to show less details.', () => {   
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();  
        });
    });
});