import React from 'react';
import PropTypes from 'prop-types';

import EventLoop from '../../utils/loop/event';

export default class EventListener extends React.Component {
    static propTypes = {
        children: PropTypes.any
    };

    static childContextTypes = {
        event: PropTypes.object
    };

    event = new EventLoop();

    componentDidMount() {
        this.event.start();
    }

    componentWillUnmount() {
        this.event.stop();
    }

    getChildContext() {
        return {
            event: this.event
        };
    }

    render() {
        return this.props.children;
    }
}
