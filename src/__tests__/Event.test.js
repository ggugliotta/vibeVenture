// src_tests_Event.test.js

import { render } from '@testing-library/react';
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
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('event element is hidden by default to show limited information.', () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('user can click on "show details" button to expand an event to show details.', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText("show details");
        await user.click(showDetailsButton);

        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('User can click on "hide details" button to collapse an event to hide details.', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText("show details");
        await user.click(showDetailsButton);

        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).toBeInTheDocument();

        const hideDetailsButton = EventComponent.queryByText("hide details");
        await user.click(hideDetailsButton);

        expect(details).not.toBeInTheDocument();
    });
})
