import React from 'react';
import { format } from 'date-fns';
import './Header.css';

const getDate = date => format(date, 'MMMM Do');

const HeaderTitle = ({ date }) => (
  <h1 className="header__title">{getDate(date)}</h1>
);

const getDayOfWeek = date => format(date, 'dddd');

const getHour = date => format(date, 'h');
const getMinute = date => format(date, 'mm');
const getAmPm = date => format(date, 'a');

const HeaderSubtitle = ({ date }) => (
  <h2 className="header__subtitle">
    {getDayOfWeek(date)}
    {', '}
    {getHour(date)}
    <span className="header__subtitle__blinking">:</span>
    {getMinute(date)} {getAmPm(date)}
  </h2>
);

const Header = ({ date, onResetPeriodUnits }) => (
  <header className="header">
    <HeaderTitle date={date} />
    <HeaderSubtitle date={date} />
  </header>
);

export default Header;
