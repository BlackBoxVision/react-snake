import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';


export default class Game extends React.Component {
    state = {
        initialLength: 0,
        positions: [],
        direction: {},
        foodPosition: {
            x: 0,
            y: 0
        }
    };

    tick = () => {
        const x = Math.floor(Math.random() * 25);
        const y = Math.floor(Math.random() * 25);

        this.setState(state => ({
            foodPosition: { x, y }
        }));
    };

    startLoop = (updaterFunc, millis = 1000) => {
        const intervalId = setInterval(updaterFunc, millis);

        return () => clearInterval(intervalId);
    };

    componentDidMount() {
        this.clearInterval = this.startLoop(this.tick);
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    render() {
        const { foodPosition: { x, y } } = this.state;

        return (
            <BoardProvider width={625} height={625} xBlocks={25} yBlocks={25} backgroundColor="#414141">
                <Box width={25} height={25} color="red" left={x * 25} top={y * 25} position="relative" />
                <Box width={25} height={25} color="green" />
            </BoardProvider>
        );
    }
}

class BoardProvider extends React.Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        xBlocks: PropTypes.number,
        yBlocks: PropTypes.number,
        backgroundColor: PropTypes.string
    };

    static contextTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        xBlocks: PropTypes.number,
        yBlocks: PropTypes.number
    };

    constructor(props, context) {
        super(props, context);
    }

    getContextTypes() {
        return {
            width: this.props.width,
            height: this.props.height,
            xBlocks: this.props.xBlocks,
            yBlocks: this.props.yBlocks
        }
    }

    render() {
        return (
            <Box width={this.props.width} height={this.props.height} color={this.props.backgroundColor}>
                {this.props.children}
            </Box>
        )
    }
}