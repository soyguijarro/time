import {
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  startOfWeek,
  startOfMonth,
  startOfQuarter,
  startOfYear,
  endOfWeek,
  endOfMonth,
  endOfQuarter,
  endOfYear,
} from 'date-fns';
import { DAY, WEEK, MONTH, QUARTER, YEAR } from '../constants/time-units';
import { getFirstLetter } from './utils';

const differenceInUnits = {
  [DAY]: differenceInDays,
  [WEEK]: differenceInWeeks,
};
const startOfPeriod = {
  [WEEK]: date => startOfWeek(date, { weekStartsOn: 1 }),
  [MONTH]: startOfMonth,
  [QUARTER]: startOfQuarter,
  [YEAR]: startOfYear,
};
const endOfPeriod = {
  [WEEK]: date => endOfWeek(date, { weekStartsOn: 1 }),
  [MONTH]: endOfMonth,
  [QUARTER]: endOfQuarter,
  [YEAR]: endOfYear,
};

const getStartDate = (period, date) => startOfPeriod[period](date);
const getEndDate = (period, date) => endOfPeriod[period](date);
const getDifferenceInUnits = (unit, endDate, date) =>
  differenceInUnits[unit](endDate, date);

export const getTimePercentageLeft = ({ period }, date) => {
  const startDate = getStartDate(period, date);
  const endDate = getEndDate(period, date);
  const percentageLeft =
    differenceInHours(endDate, date) / differenceInHours(endDate, startDate);

  return parseFloat(percentageLeft.toFixed(2));
};

export const getTimeUnitsLeft = ({ period, unit }, date) => {
  const endDate = getEndDate(period, date);
  const unitsLeft = getDifferenceInUnits(unit, endDate, date);

  return `${unitsLeft} ${getFirstLetter(unit)}`;
};
