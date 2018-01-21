import React, { Component, Children, isValidElement } from 'react';
import Svg from './Svg';
import SvgCircle from './SvgCircle';
import './DonutChart.css';

const DonutChartText = ({ children }) => {
  if (!isValidElement(children) || Children.count(children) > 1) {
    return <div className="donut__text">{children}</div>;
  }

  const child = Children.only(children);
  return React.cloneElement(child, {
    className: `donut__text ${child.props.className || ''}`,
  });
};

const DonutChartCircle = ({ color, width, percentage, onClick }) => (
  <Svg className="donut__graph" size="2" onClick={onClick}>
    <SvgCircle className="donut__graph__background" strokeWidth={width} />
    <SvgCircle
      className="donut__graph__fill"
      strokeColor={color}
      strokeWidth={width}
      strokeAngleScale={percentage}
    />
  </Svg>
);

class DonutChart extends Component {
  state = {
    percentage: 1,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setPercentage(this.props.percentage);
    }, 500);
  }

  componentWillReceiveProps(nextProps) {
    this.setPercentage(nextProps.percentage);
  }

  setPercentage = percentage => {
    this.setState({ percentage });
  };

  render() {
    const { className, color, width, onClick, children } = this.props;
    const { percentage } = this.state;

    return (
      <div className={`donut ${className || ''}`}>
        {children && <DonutChartText>{children}</DonutChartText>}

        <DonutChartCircle
          color={color}
          width={width}
          percentage={percentage}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default DonutChart;
