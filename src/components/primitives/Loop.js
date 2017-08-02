import React from 'react';
import PropTypes from 'prop-types';

export default class Loop extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        tick: PropTypes.func.isRequired,
        loopDelay: PropTypes.number.isRequired
    };

    componentWillMount() {
        this.clearInterval = this.startLoop(this.props.tick, this.props.loopDelay);
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
