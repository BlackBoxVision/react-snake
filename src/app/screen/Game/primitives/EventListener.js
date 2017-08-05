import React from 'react';
import PropTypes from 'prop-types';

import EventLoop from '../../../utils/loop/EventLoop';

export default class EventListener extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    static childContextTypes = {
        eventLoop: PropTypes.object
    };

    eventLoop = new EventLoop();

    componentDidMount() {
        this.eventLoop.start();
    }

    componentWillUnmount() {
        this.eventLoop.stop();
    }

    getChildContext() {
        return {
            eventLoop: this.eventLoop
        };
    }

    render() {
        return this.props.children;
    }
}
