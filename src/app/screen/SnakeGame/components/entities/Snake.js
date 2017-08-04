import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SnakeSkin from '../../../../../static/images/snake/skin1.jpg';

import EventListener from '../primitives/Listener';
import Pixel from '../primitives/Pixel';

import Config from '../../../../config';
import GameLogic from "../../../../logic";

import { moveSnake, changeSnakeDirectionTo } from "../../../../redux/snake/actions";

class Snake extends React.Component {
    static contextTypes = {
        loop: PropTypes.object
    };

    componentDidMount() {
        this.context.loop.subscribe('snake', this.update);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe('snake');
    }

    render() {
        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <div>
                    <Pixel
                        zIndex={100}
                        color="green"
                        position={this.props.snake.head}
                        image={`url(${SnakeSkin})`}
                        size="20px 20px"
                    />
                    {this.props.snake.tail.map(this.renderTail)}
                </div>
            </EventListener>
        );
    }

    renderTail = (pos, index) =>
        <Pixel
            key={`snake-tail-${index}`}
            zIndex={100}
            color="green"
            position={pos}
            image={`url(${SnakeSkin})`}
            size="20px 20px"
        />;

    update = currentTime => {
        if (currentTime && currentTime - this.lastTime > 100) {
            const newState = GameLogic.updateSnake(this.props.snake);
            this.props.dispatch(moveSnake(newState.head, newState.tail, currentTime));
        }
    };

    handleKeyUp = event => {
        const char = event.which || event.keyCode;

        switch (char) {
            case Config.Direction.UP:
            case Config.Direction.DOWN:
                const y = char === Config.Direction.UP ? -1 : 1;
                this.props.dispatch(changeSnakeDirectionTo(0, y));
                break;

            case Config.Direction.LEFT:
            case Config.Direction.RIGHT:
                const x = char === Config.Direction.LEFT ? -1 : 1;
                this.props.dispatch(changeSnakeDirectionTo(x, 0));
                break;

            default:
                console.info('Unknown direction!');
                break;
        }
    };
}

const mapStateToProps = state => ({
    snake: state.snake
});

export default connect(mapStateToProps)(Snake);
