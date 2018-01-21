import React from 'react';
import DonutChart from './DonutChart';
import { mount, shallow } from 'enzyme';

describe('DonutChart component', () => {
  const color = 'red';
  const someInnerText = 'Some text';
  const anotherInnerText = 'Another text';

  const getWrapper = children =>
    mount(
      <DonutChart color={color} percentage={0.75}>
        {children}
      </DonutChart>
    );

  it('renders chart with provided color', () => {
    const wrapper = getWrapper();

    expect(wrapper.find({ stroke: color }).length).toBeTruthy();

    wrapper.unmount();
  });

  it('renders provided children', () => {
    const cases = [
      { children: someInnerText, expectedContents: [someInnerText] },
      { children: <p>{someInnerText}</p>, expectedContents: [someInnerText] },
      {
        children: [
          <p key={2}>{someInnerText}</p>,
          <p key={3}>{anotherInnerText}</p>,
        ],
        expectedContents: [someInnerText, anotherInnerText],
      },
    ];

    cases.forEach(({ children, expectedContents }) => {
      const wrapper = getWrapper(children);
      const content = wrapper.text();

      expectedContents.forEach(expected => {
        expect(content).toMatch(expected);
      });

      wrapper.unmount();
    });
  });

  it('renders no children if none provided', () => {
    const wrapper = getWrapper();

    expect(wrapper.text()).toBe('');

    wrapper.unmount();
  });

  it('animates percentage on mount', () => {
    const wrapper = shallow(<DonutChart color={color} percentage={0.33} />);

    expect(wrapper.find({ percentage: 1 }).length).toBeTruthy();

    jest.runTimersToTime(500);
    wrapper.update();
    expect(wrapper.find({ percentage: 0.33 }).length).toBeTruthy();
  });

  it('animates percentage on prop change', () => {
    const wrapper = shallow(<DonutChart color={color} percentage={0.33} />);

    jest.runTimersToTime(500);
    wrapper.update();
    expect(wrapper.find({ percentage: 0.33 }).length).toBeTruthy();

    wrapper.setProps({ percentage: 0.75 });
    expect(wrapper.find({ percentage: 0.75 }).length).toBeTruthy();
  });
});
