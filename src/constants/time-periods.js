import { DAY, WEEK, MONTH, QUARTER, YEAR } from './time-units';

export default {
  [WEEK]: {
    name: 'Week',
    color: '#2196F3',
    unit: DAY,
  },
  [MONTH]: {
    name: 'Month',
    color: '#E91E63',
    unit: DAY,
  },
  [QUARTER]: {
    name: 'Quarter',
    color: '#009688',
    unit: WEEK,
  },
  [YEAR]: {
    name: 'Year',
    color: '#FF5722',
    unit: WEEK,
  },
};
