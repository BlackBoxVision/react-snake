import React from 'react';
import PropTypes from 'prop-types';

import withAnimationFrame from 'react-animation-frame';

class Loop extends React.PureComponent {
    static propTypes = {
        children: PropTypes.any,
        tick: PropTypes.func.isRequired,
        delay: PropTypes.number.isRequired
    };

    onAnimationFrame(time) {
        this.props.tick();
    }

    render() {
        return this.props.children;
    }
}

export default withAnimationFrame(Loop, 75);
