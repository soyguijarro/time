import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import Periods from './Periods';

describe('App component', () => {
  it('renders header', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists(Header)).toBe(true);

    const dateProp = wrapper.find(Header).props('date');
    expect(dateProp).toBeTruthy();

    wrapper.unmount();
  });

  it('renders periods', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists(Periods)).toBe(true);

    const dateProp = wrapper.find(Periods).props('date');
    expect(dateProp).toBeTruthy();

    wrapper.unmount();
  });

  it('updates every second', () => {
    const render = jest.spyOn(App.prototype, 'render');
    shallow(<App />);
    jest.runTimersToTime(5000);

    expect(render).toHaveBeenCalledTimes(6);
  });
});
