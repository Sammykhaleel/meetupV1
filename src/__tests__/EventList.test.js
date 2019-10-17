import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';
import EventList from '../components/EventList';

describe('<Event /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(
      <EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    );
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});
