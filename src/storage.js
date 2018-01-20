import { getPeriodIds } from './config';

const getPeriodUnitKey = periodId => `${periodId}-unit`;

export const loadPeriodUnit = periodId =>
  localStorage.getItem(getPeriodUnitKey(periodId));

export const savePeriodUnit = (periodId, unit) => {
  localStorage.setItem(getPeriodUnitKey(periodId), unit);
};

const clearPeriodUnit = periodId => {
  localStorage.removeItem(getPeriodUnitKey(periodId));
};

export const clearPeriodUnits = () => {
  getPeriodIds().forEach(clearPeriodUnit);
};
