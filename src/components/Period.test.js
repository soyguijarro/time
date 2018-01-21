import React from 'react';
import { shallow } from 'enzyme';
import Period from './Period';
import { WEEK, DAY } from '../constants/time-units';
import DonutChart from './DonutChart';

describe('Period component', () => {
  const date = new Date(2018, 0, 19, 13, 0);
  const period = {
    id: WEEK,
    name: 'Week',
    unit: DAY,
    color: 'red',
  };
  const expectedPercentageLeft = 0.35;
  const expectedUnitsLeft = '2 d';

  const wrapper = shallow(<Period date={date} period={period} />);

  describe('donut chart', () => {
    it('is rendered', () => {
      expect(wrapper.exists(DonutChart)).toBe(true);
    });

    it('has color and percentage props', () => {
      const donutChart = wrapper.find(DonutChart);

      expect(donutChart.prop('color')).toBe(period.color);
      expect(donutChart.prop('percentage')).toBe(expectedPercentageLeft);
    });

    it('has units left', () => {
      const unitsLeft = wrapper
        .find(DonutChart)
        .find({ children: expectedUnitsLeft });

      expect(unitsLeft.length).toBeTruthy();
      expect(unitsLeft.prop('children')).toBe(expectedUnitsLeft);
    });
  });

  describe('time period', () => {
    it('is rendered', () => {
      expect(wrapper.text()).toMatch(period.name);
    });
  });
});
