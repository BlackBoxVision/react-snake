import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Pixel from '../primitives/Pixel';

class Apple extends React.Component {
    static propTypes = {
        state: PropTypes.shape({
            lastTime: PropTypes.number.isRequired,
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            })
        })
    };

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
        return <Pixel zIndex={10} color="#F44336" position={this.props.state.position} />;
    }

    update = currentTime => {
        if (currentTime && currentTime - this.props.state.lastTime > 100) {
            //this.setState(currentState => GameLogic._recomputeFood(currentState));
            //this.lastTime = currentTime;
        }
    };
}

const mapStateToProps = state => ({
    state: state.food
});

export default connect(mapStateToProps)(Apple);
