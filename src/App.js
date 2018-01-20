import React, { Component, Fragment } from 'react';
import Header from './Header';
import Periods from './Periods';
import { PERIODS_ARRAY } from './config';

class App extends Component {
  state = {
    currentDate: new Date(),
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
