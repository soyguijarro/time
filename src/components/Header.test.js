import React from 'react';
import { render } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  const date = new Date(2018, 0, 19, 13, 0);

  const wrapper = render(<Header date={date} />);
  const content = wrapper.text();

  it('renders month and day of month', () => {
    expect(content).toMatch('January 19th');
  });

  it('renders day of week and time', () => {
    expect(content).toMatch('Friday, 1:00 pm');
  });
});
