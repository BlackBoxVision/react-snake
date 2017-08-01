import React from 'react';

import Pixel from '../primitives/Pixel';

const SnakeFood = ({ color = 'red', ...rest }) => <Pixel color={color} {...rest} />;

export default SnakeFood;
