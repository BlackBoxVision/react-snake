import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SnakeSkin from '../../../../static/images/snake/skin1.jpg';

import EventListener from '../primitives/EventListener';
import Pixel from '../primitives/Pixel';

import * as SnakeActions from '../../../redux/snake/actions';
import { snakeSelector } from '../../../redux/snake/selector';

class Snake extends React.Component {
    static propTypes = {
        state: PropTypes.shape({
            lastTime: PropTypes.number.isRequired,
            head: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }),
            tail: PropTypes.array.isRequired,
            tailLength: PropTypes.number.isRequired,
            direction: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            })
        }),
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

    render() {
        const { state: { head, tail } } = this.props;

        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <div>
                    <Pixel zIndex={100} color="green" position={head} image={`url(${SnakeSkin})`} size="20px 20px" />
                    {tail.map(this.renderTail)}
                </div>
            </EventListener>
        );
    }

    renderTail = (position, index) =>
        <Pixel
            key={`snake-tail-${index}`}
            zIndex={100}
            color="green"
            size="20px 20px"
            position={position}
            image={`url(${SnakeSkin})`}
        />;

    update = currentTime => this.props.actions.update(currentTime);

    handleKeyUp = event => this.props.actions.handleKeyUp(event.which || event.keyCode);
}

const mapStateToProps = state => ({
    state: snakeSelector(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SnakeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Snake);
