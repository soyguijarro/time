import React from 'react';
import { render, shallow } from 'enzyme';
import SvgCircle from './SvgCircle';

describe('SvgCircle', () => {
  const fillColor = 'red';
  const strokeColor = 'blue';

  const componentWithDefaults = <SvgCircle size={2} />;
  const componentWithOptProps = (
    <SvgCircle
      size={2}
      strokeAngleScale={0.75}
      fillColor={fillColor}
      strokeColor={strokeColor}
      strokeWidth={0.25}
    />
  );
  const expectedStrokeDashoffset = '1.445';

  it('renders circle as svg element', () => {
    const wrapper = shallow(componentWithDefaults);

    expect(wrapper.exists('circle')).toBe(true);
  });

  it('renders circle with default attributes if no props', () => {
    const wrapper = render(componentWithDefaults);

    expect(wrapper.prop('cx')).toBe('1');
    expect(wrapper.prop('cy')).toBe('1');
    expect(wrapper.prop('r')).toBe('1');
    expect(wrapper.prop('fill')).toBe('none');
    expect(wrapper.prop('stroke')).toBe('none');
    expect(wrapper.prop('stroke-width')).toBe('0');
    expect(wrapper.prop('stroke-dasharray')).toBe(undefined);
    expect(wrapper.prop('stroke-dashoffset')).toBe(undefined);
  });

  it('renders circle with attributes derived from props', () => {
    const wrapper = render(componentWithOptProps);

    expect(wrapper.prop('cx')).toBe('1');
    expect(wrapper.prop('cy')).toBe('1');
    expect(wrapper.prop('r')).toBe('0.875');
    expect(wrapper.prop('fill')).toBe('red');
    expect(wrapper.prop('stroke')).toBe('blue');
    expect(wrapper.prop('stroke-width')).toBe('0.25');
    expect(wrapper.prop('stroke-dasharray')).toBe('5.78');
    expect(wrapper.prop('stroke-dashoffset')).toBe(expectedStrokeDashoffset);
  });
});
