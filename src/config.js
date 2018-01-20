import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfQuarter,
  endOfQuarter,
  startOfYear,
  endOfYear,
  differenceInDays,
  differenceInWeeks,
} from 'date-fns';

const DAY_ID = 'day';
const WEEK_ID = 'week';
const MONTH_ID = 'month';
const QUARTER_ID = 'quarter';
const YEAR_ID = 'year';

export const PERIODS = {
  [WEEK_ID]: {
    id: WEEK_ID,
    name: 'Week',
    start: date => startOfWeek(date, { weekStartsOn: 1 }),
    end: date => endOfWeek(date, { weekStartsOn: 1 }),
    difference: differenceInDays,
    unit: DAY_ID,
    color: '#2196F3',
  },
  [MONTH_ID]: {
    id: MONTH_ID,
    name: 'Month',
    start: startOfMonth,
    end: endOfMonth,
    difference: differenceInDays,
    unit: DAY_ID,
    color: '#E91E63',
  },
  [QUARTER_ID]: {
    id: QUARTER_ID,
    name: 'Quarter',
    start: startOfQuarter,
    end: endOfQuarter,
    difference: differenceInWeeks,
    unit: WEEK_ID,
    color: '#009688',
  },
  [YEAR_ID]: {
    id: YEAR_ID,
    name: 'Year',
    start: startOfYear,
    end: endOfYear,
    difference: differenceInWeeks,
    unit: WEEK_ID,
    color: '#FF5722',
  },
};
