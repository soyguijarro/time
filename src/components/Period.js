import React from 'react';
import DonutChart from './DonutChart';
import './Period.css';
import { getTimeUnitsLeft, getTimePercentageLeft } from '../logic/time-left';

const Period = ({ date, period: { id, name, unit, color } }) => (
  <section className="period">
    <DonutChart
      className="period__chart"
      color={color}
      width={0.16}
      percentage={getTimePercentageLeft({ period: id }, date)}
    >
      <h2 className="period__chart__title" style={{ color }}>
        {getTimeUnitsLeft({ period: id, unit }, date)}
      </h2>
    </DonutChart>

    <h3 className="period__text">{name}</h3>
  </section>
);

export default Period;
