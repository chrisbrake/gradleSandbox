import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from '../js/App';

Enzyme.configure({adapter: new Adapter()});

describe('Main App', () => {
  it('says hello', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe('Hello From React');
  })
});