import React from 'react';

const Svg = ({ className, size, children }) => (
  <svg
    className={className}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {React.Children.map(children, child => React.cloneElement(child, { size }))}
  </svg>
);

export default Svg;
