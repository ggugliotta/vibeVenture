// src_tests_Event.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';



describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={Event} />);
    })

    test('renders event title (summary key)', () => {
      const eventSummary = EventComponent.queryByText('summary');
      expect(EventComponent.queryByText(eventdata[0].summary)).toBeInTheDocument();
    });

    test('renders event start time (created key)', () => {
        const eventdateTime = EventComponent.queryByText('dateTime');
        expect(EventComponent.queryByText(eventdata[0].dateTime)).toBeInTheDocument();
    });

    test('renders event location', () => {
        const eventLocation = EventComponent.queryByText('location');
        expect(EventComponent.queryByText(eventdata[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        const eventShowDetails = EventComponent.queryByText('show details');
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('event element is hidden by default to show limited information.', () => {
        const eventDetails = eventComponent.queryByText('details')
        expect(eventDetails).not.toBeInTheDocument();
    });

    test('user can click on "show details" button to expand an event to show details.', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText("show details");
        const allEvents = await getEvents();
        await user.click(showDetailsButton);
        const detailsSection = EventComponent.container.querySelector("detailsOpen"); 
        expect(detailsSection).toBeVisible();
        EventComponent.rerender(<Event event={ Event } /> );
    });

    test('User can click on "hide details" button to collapse an event to hide details.', async () => {
        const user = userEvent.setup();
        const hideDetailsButton = EventComponent.queryByText("hide details");
        await user.click(hideDetails);
        const detailsSection = EventComponent.container.querySelector("details closed");
        expect(detailsSection).not.toBeVisible();
        EventComponent.rerender(<Event event = { Event } />);
    });
})