// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
  
  test('render Event', () => {
    expect(AppDOM.querySelector('#event')).toBeInTheDocument();
  });

  test('render number of events', () => {
    expect(AppDOM.container.firstChild.querySelector('#number-of-events')).toBeInTheDocument();
  });
});
