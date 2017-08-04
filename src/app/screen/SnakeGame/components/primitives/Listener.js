import React from 'react';
import PropTypes from 'prop-types';

export default class EventListener extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        handler: PropTypes.func.isRequired,
        children: PropTypes.any
    };

    componentWillMount() {
        window.addEventListener(this.props.name, this.props.handler);
    }

    componentWillUnmount() {
        window.removeEventListener(this.props.name, this.props.handler);
    }

    render() {
        return this.props.children;
    }
}
