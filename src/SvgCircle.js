import React from 'react';

const ANGLE_FACTOR = 2.89;
const FULL_CIRCLE_DEG = 360;

const SvgCircle = ({
  className,
  size,
  fillColor = 'none',
  strokeColor = 'none',
  strokeWidth = 0,
  strokeAngleScale,
}) => {
  const strokeDasharray = strokeAngleScale ? size * ANGLE_FACTOR : undefined;
  const strokeDashoffset = strokeAngleScale
    ? strokeDasharray /
      FULL_CIRCLE_DEG *
      (FULL_CIRCLE_DEG - strokeAngleScale * FULL_CIRCLE_DEG)
    : undefined;

  return (
    <circle
      className={className}
      cx={size / 2}
      cy={size / 2}
      r={(size - strokeWidth) / 2}
      fill={fillColor || 'none'}
      stroke={strokeColor || 'none'}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeDashoffset={strokeDashoffset}
    />
  );
};

export default SvgCircle;
