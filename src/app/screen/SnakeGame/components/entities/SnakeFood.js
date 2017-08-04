import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Pixel from '../primitives/Pixel';


class SnakeFood extends React.Component {
    static contextTypes = {
        loop: PropTypes.object
    };

    componentDidMount() {
        this.context.loop.subscribe('apple', this.update);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe('apple');
    }

    render() {
        return (
            <Pixel zIndex={10} color="F44336" position={this.props.position} />
        );
    }

    update = currentTime => {
        if (currentTime && currentTime - this.lastTime > 100) {
            //this.setState(currentState => GameLogic._recomputeFood(currentState));
            this.lastTime = currentTime;
        }
    };
}

export default connect(state => state.food)(SnakeFood);