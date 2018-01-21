import { getTimePercentageLeft, getTimeUnitsLeft } from './time-left';
import { DAY, MONTH, WEEK, QUARTER, YEAR } from '../constants/time-units';
const date = new Date(2018, 0, 19, 13, 0);

describe('getTimePercentageLeft', () => {
  const cases = [
    { period: WEEK, expectedPercentage: 0.35 },
    { period: MONTH, expectedPercentage: 0.4 },
    { period: QUARTER, expectedPercentage: 0.79 },
    { period: YEAR, expectedPercentage: 0.95 },
  ];

  cases.forEach(({ period, expectedPercentage }) => {
    it(`returns time percentage left for ${period} period`, () => {
      const result = getTimePercentageLeft({ period }, date);
      expect(result).toBe(expectedPercentage);
    });
  });
});

describe('getTimeUnitsLeft', () => {
  const cases = [
    { period: WEEK, unit: DAY, expectedUnits: '2 d' },
    { period: WEEK, unit: WEEK, expectedUnits: '0 w' },
    { period: MONTH, unit: DAY, expectedUnits: '12 d' },
    { period: MONTH, unit: WEEK, expectedUnits: '1 w' },
    { period: QUARTER, unit: DAY, expectedUnits: '71 d' },
    { period: QUARTER, unit: WEEK, expectedUnits: '10 w' },
    { period: YEAR, unit: DAY, expectedUnits: '346 d' },
    { period: YEAR, unit: WEEK, expectedUnits: '49 w' },
  ];

  cases.forEach(({ period, unit, expectedUnits }) => {
    it(`returns ${unit}s left for ${period} period and ${unit} unit`, () => {
      const result = getTimeUnitsLeft({ period, unit }, date);
      expect(result).toBe(expectedUnits);
    });
  });
});
