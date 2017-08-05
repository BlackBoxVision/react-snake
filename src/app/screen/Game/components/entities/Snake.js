import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SnakeSkin from '../../../../../static/images/snake/skin1.jpg';

import Box from '../../../../common/primitives/Box';
import Pixel from '../primitives/Pixel';

import * as SnakeActions from '../../../../redux/snake/actions';
import { headSelector, tailSelector } from '../../../../redux/snake/selector';

class Snake extends React.Component {
    static propTypes = {
        head: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }),
        tail: PropTypes.array.isRequired,
        actions: PropTypes.shape({
            update: PropTypes.func.isRequired,
            handleKeyUp: PropTypes.func.isRequired
        })
    };

    static contextTypes = {
        loop: PropTypes.object,
        eventLoop: PropTypes.object
    };

    componentDidMount() {
        this.context.loop.subscribe('snake', this.update);
        this.context.eventLoop.subscribe('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe('snake');
        this.context.eventLoop.unsubscribe('keyup');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.props.head.x !== nextProps.head.x ||
            this.props.head.y !== nextProps.head.y ||
            this.props.tail.length !== nextProps.tail.length
        ) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <Box>
                <Pixel
                    image={`url(${SnakeSkin})`}
                    position={this.props.head}
                    size="20px 20px"
                    color="green"
                    zIndex={100}
                />
                {this.props.tail.map(this.renderTail)}
            </Box>
        );
    }

    renderTail = (position, index) =>
        <Pixel
            key={`snake-tail-${index}`}
            image={`url(${SnakeSkin})`}
            position={position}
            size="20px 20px"
            color="green"
            zIndex={100}
        />;

    update = currentTime => this.props.actions.update(currentTime);

    handleKeyUp = event => this.props.actions.handleKeyUp(event.which || event.keyCode);
}

const mapStateToProps = state => ({
    head: headSelector(state),
    tail: tailSelector(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SnakeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Snake);
