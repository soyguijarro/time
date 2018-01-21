import React from 'react';
import Period from './Period';
import './Periods.css';

const Periods = ({ date, periods }) => (
  <main className="periods">
    {periods.map(period => (
      <Period key={period.id} date={date} period={period} />
    ))}
  </main>
);

export default Periods;
