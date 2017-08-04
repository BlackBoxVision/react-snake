import React from 'react';
import PropTypes from 'prop-types';

class GameLoop {
    subscribers = [];
    loopID = null;

    loop = time => {
        this.subscribers.forEach(({ callback }) => callback(time));
        this.loopID = window.requestAnimationFrame(this.loop);
    };

    start = () => {
        if (!this.loopID) {
            this.loop();
        }
    };

    stop = () => window.cancelAnimationFrame(this.loopID);

    subscribe = (name, callback) => this.subscribers.push({ name, callback });

    unsubscribe = callbackName => (this.subscribers = this.subscribers.filter(({ name }) => name !== callbackName));

    clearSubscribers = () => (this.subscribers = []);
}

export default class Loop extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    static childContextTypes = {
        loop: PropTypes.object
    };

    loop = new GameLoop();

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
    }

    getChildContext() {
        return {
            loop: this.loop
        };
    }

    render() {
        return this.props.children;
    }
}
