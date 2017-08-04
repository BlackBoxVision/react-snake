import React from 'react';
import PropTypes from 'prop-types';

export default class Loop extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        tick: PropTypes.func.isRequired,
        delay: PropTypes.number.isRequired,
        shouldStop: PropTypes.bool.isRequired
    };

    componentWillMount() {
        this.clearInterval = this.startLoop(this.props.tick, this.props.delay);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shouldStop) {
            this.clearInterval();
        }
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    render() {
        return this.props.children;
    }

    startLoop = (updaterFunc, millis = 300) => {
        const intervalId = setInterval(updaterFunc, millis);

        return () => clearInterval(intervalId);
    };
}