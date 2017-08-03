import React from 'react';

import Pixel from '../primitives/Pixel';

const SnakeFood = ({ color = '#F44336', ...rest }) => <Pixel zIndex={10} color={color} {...rest} />;

export default SnakeFood;
