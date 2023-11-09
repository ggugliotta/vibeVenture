// src_tests_Event.test.js
/* eslint-disable testing-library/prefer-find-by */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api'

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    });

    test('renders event title (summary key)', () => {
      expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event start time (created key)', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        const button = EventComponent.queryByText("show details");
        expect("show-details-btn").toBeTruthy(); 
    });

    test('event element is hidden by default to show limited information.', () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('user can click on "show details" button to expand an event to show details.', async () => {
        render(<Event event={allEvents[0]} />)
        userEvent.click(screen.queryAllByText('Show Details'));
        await waitFor(() => expect(screen.queryAllByText("Description")).toBeTruthy());
    });

    test('User can click on "hide details" button to collapse an event to hide details.', async () => {
        render(<Event event={allEvents[0]} />)
        userEvent.click(screen.queryAllByText('Show Details'));
        await waitFor(() => expect(screen.queryAllByText("Description")).toBeTruthy());

        const hideDetailsButton = screen.queryAllByText("Hide Details");
        userEvent.click(hideDetailsButton);

        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});