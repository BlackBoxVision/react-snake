import React from 'react';

import FoodSkin from '../../images/food/skin0.png';
import Pixel from '../primitives/Pixel';

const SnakeFood = ({ color = 'transparent', ...rest }) =>
    <Pixel zIndex={10} color={color} {...rest} image={`url(${FoodSkin})`} />;

export default SnakeFood;
