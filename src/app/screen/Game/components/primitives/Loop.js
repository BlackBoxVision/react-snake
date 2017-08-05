import React from 'react';
import PropTypes from 'prop-types';

import GameLoop from '../../../../utils/loop/game';

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
