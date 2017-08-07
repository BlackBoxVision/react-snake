import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SnakeSkin from '../../../../../static/images/snake/skin1.jpg';

import Box from '../../../../common/primitives/Box';
import Pixel from '../primitives/Pixel';

import * as SnakeActions from '../../../../redux/snake/actions';
import * as SnakeSelectors from '../../../../redux/snake/selector';

class Snake extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        direction: PropTypes.shape({
            up: PropTypes.number.isRequired,
            down: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            right: PropTypes.number.isRequired
        }),
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

    static defaultProps = {
        name: 'snake',
        direction: {
            up: 38,
            down: 40,
            left: 37,
            right: 39
        }
    };

    static contextTypes = {
        loop: PropTypes.object,
        eventLoop: PropTypes.object
    };

    componentDidMount() {
        this.context.loop.subscribe(this.props.name, this.update);
        this.context.eventLoop.subscribe('keyup', this.handleKeyUp(this.props.direction));
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.props.name);
        this.context.eventLoop.unsubscribe('keyup');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.head.x !== nextProps.head.x ||
            this.props.head.y !== nextProps.head.y ||
            this.props.tail.length !== nextProps.tail.length
        );
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

    handleKeyUp = direction => event => this.props.actions.handleKeyUp(event.which || event.keyCode, direction);
}

const mapStateToProps = state => ({
    head: SnakeSelectors.head(state),
    tail: SnakeSelectors.tail(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SnakeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Snake);
