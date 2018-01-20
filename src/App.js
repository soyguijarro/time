import React, { Component, Fragment } from 'react';
import Header from './Header';
import Periods from './Periods';
import Goals from './Goals';
import { PERIODS } from './config';
import { arrayToObject, objectToArray } from './utils';

class App extends Component {
  state = {
    currentDate: new Date(),
    selectedPeriod: null,
    goals: arrayToObject(Object.keys(PERIODS), periodId => [periodId, []]),
  };

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

  setSelectedPeriod = period => {
    this.setState({
      selectedPeriod: period,
    });
  };

  render() {
    const { currentDate, selectedPeriod } = this.state;

    return (
      <Fragment>
        <Header date={currentDate} />
        {selectedPeriod ? (
          <Goals date={currentDate} period={selectedPeriod} />
        ) : (
          <Periods
            date={currentDate}
            periods={objectToArray(PERIODS)}
            onPeriodClick={this.setSelectedPeriod}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
