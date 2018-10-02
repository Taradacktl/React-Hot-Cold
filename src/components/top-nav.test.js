import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should fire onRestartGame when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
  it('Should fire onGenerateAuralUpdate when state of game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    // where is status-link?
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
  });
    expect(callback).toHaveBeenCalled();
  });
});
