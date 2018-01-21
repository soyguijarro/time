import React, { Component, Fragment } from 'react';
import Header from './Header';
import Periods from './Periods';
import TIME_PERIODS from '../constants/time-periods';
import { objectToArray } from '../logic/utils';

const PERIODS_ARRAY = objectToArray(TIME_PERIODS, (period, value) => ({
  ...TIME_PERIODS[period],
  id: period,
}));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateDate = () => {
    this.setState({
      currentDate: new Date(),
    });
  };

  render() {
    const { currentDate } = this.state;

    return (
      <Fragment>
        <Header date={currentDate} />
        <Periods date={currentDate} periods={PERIODS_ARRAY} />
      </Fragment>
    );
  }
}

export default App;
