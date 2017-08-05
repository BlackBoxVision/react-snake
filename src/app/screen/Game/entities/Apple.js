import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Pixel from '../primitives/Pixel';

import * as AppleActions from '../../../redux/apple/actions';
import { appleSelector } from '../../../redux/apple/selector';

class Apple extends React.Component {
    static propTypes = {
        state: PropTypes.shape({
            lastTime: PropTypes.number.isRequired,
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            })
        }),
        actions: PropTypes.shape({
            update: PropTypes.func.isRequired
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

    update = currentTime => this.props.actions.update(currentTime);
}

const mapStateToProps = state => ({
    state: appleSelector(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AppleActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Apple);
