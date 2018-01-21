import React from 'react';
import Periods from './Periods';
import { shallow } from 'enzyme';
import { WEEK, DAY, MONTH } from '../constants/time-units';
import Period from './Period';

describe('Periods component', () => {
  const date = new Date(2018, 0, 19, 13, 0);
  const periods = [
    {
      id: WEEK,
      name: 'Week',
      unit: DAY,
      color: 'red',
    },
    {
      id: MONTH,
      name: 'Month',
      unit: DAY,
      color: 'red',
    },
  ];
  const wrapper = shallow(<Periods date={date} periods={periods} />);

  it('renders provided periods', () => {
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((child, index) => {
      child.is(Period);
      expect(child.prop('date')).toBe(date);
      expect(child.prop('period')).toEqual(periods[index]);
    });
  });
});
