import React from 'react';
import { differenceInHours } from 'date-fns';
import Donut from './Donut';
import './Period.css';

const getFirstLetter = string => string.slice(0, 1);

const Period = ({ date, period }) => {
  const { name, start, end, difference, unit, color } = period;

  const startDate = start(date);
  const endDate = end(date);

  const unitsLeft = difference(endDate, date);
  const percentageLeft =
    differenceInHours(endDate, date) / differenceInHours(endDate, startDate);

  return (
    <section className="period">
      <Donut
        className="period__chart"
        color={color}
        width={0.16}
        percentage={percentageLeft}
      >
        <h2 className="period__chart__title" style={{ color }}>
          {unitsLeft} {getFirstLetter(unit)}
        </h2>
      </Donut>

      <h3 className="period__text">{name}</h3>
    </section>
  );
};

export default Period;
