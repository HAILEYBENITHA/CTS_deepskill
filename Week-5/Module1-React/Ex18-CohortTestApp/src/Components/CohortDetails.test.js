import React from 'react';
import { shallow, mount } from 'enzyme';
import CohortDetails from './CohortDetails';
import Cohort from '../Cohort';
import { CohortData } from '../App';

// Unit test suite for the CohortDetails component.
describe('Cohort Details Component', () => {
  // Test 1: should create the component (in isolation using shallow)
  test('should create the component', () => {
    const cohort = new Cohort(
      'DELTA 2026',
      '05-Jan-2026',
      '05-Apr-2026',
      'ongoing',
      'Online'
    );
    const wrapper = shallow(<CohortDetails cohort={cohort} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: should initialize the props
  test('should initialize the props', () => {
    const cohort = CohortData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    expect(wrapper.props().cohort).toEqual(cohort);
  });

  // Test 3: should display cohort code in h3
  test('should display cohort code in h3', () => {
    const cohort = CohortData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    const h3 = wrapper.find('h3');
    expect(h3.text()).toBe(cohort.cohortCode);
  });

  // Test 4: should always render same html (snapshot test)
  test('should always render same html', () => {
    const cohort = CohortData[0];
    const wrapper = shallow(<CohortDetails cohort={cohort} />);
    expect(wrapper).toMatchSnapshot();
  });
});
