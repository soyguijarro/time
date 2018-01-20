import React, { Component } from 'react';
import Svg from './Svg';
import SvgCircle from './SvgCircle';
import './Donut.css';

const DonutText = ({ children }) => {
  if (React.Children.count(children) > 1) {
    return <div className="donut__text">{children}</div>;
  }

  const child = React.Children.only(children);
  return React.cloneElement(child, {
    className: `donut__text ${child.props.className || ''}`,
  });
};

const DonutArc = ({ color, width, percentage, onClick }) => (
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

const Donut = ({ className, color, width, percentage, onClick, children }) => (
  <div className={`donut ${className || ''}`}>
    <DonutText>{children}</DonutText>

    <DonutArc
      color={color}
      width={width}
      percentage={percentage}
      onClick={onClick}
    />
  </div>
);

class AnimatedDonut extends Component {
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
    const { percentage, ...props } = this.props;
    return <Donut percentage={this.state.percentage} {...props} />;
  }
}

export default AnimatedDonut;
