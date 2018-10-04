import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
});
//it('Can start a new game', () => {} 
//it('Can make guesses', () => {} 
//it('Can generate aural updates', () => {}