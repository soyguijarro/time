import React from 'react';
import Period from './Period';
import './Periods.css';

const Periods = ({ date, periods, onPeriodClick }) => (
  <main className="periods">
    {periods.map(period => (
      <Period
        key={period.id}
        date={date}
        period={period}
        onClick={() => {
          onPeriodClick(period.id);
        }}
      />
    ))}
  </main>
);

export default Periods;
