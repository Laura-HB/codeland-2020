import React from "react";
import { mount } from 'enzyme';
import Laura from '../pages/participants/laura';

describe("Laura's page", () => {
  it("displays Laura's name", () => {
    const wrapper = mount(<Laura />);
    expect(wrapper.text().includes('Laura Brown')).toBe(true);
  });
});
