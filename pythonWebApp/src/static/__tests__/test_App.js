import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from '../js/App';

Enzyme.configure({adapter: new Adapter()});

describe('Main App', () => {
  it('says hello', () => {
    expect(shallow(<App />).text()).toBe('Hello From React');
  })
  
  it('says what used to say', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  })
});