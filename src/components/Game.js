import React from 'react';

import Box from './Box';

export default class Game extends React.Component {
    state = {
        initialLength: 0,
        positions: [],
        direction: {
            x: 0,
            y: 0
        }
    };

    tick = () => {
        const value = Math.floor(Math.random() * 500);

        this.setState(state => ({
            direction: {
                x: value,
                y: value
            }
        }));
    };

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { direction: { x, y } } = this.state;

        return (
            <Box width={550} height={550} color="#414141">
                <Box width={25} height={25} color="red" left={x} top={y} position="relative" />
                <Box width={25} height={25} color="green" />
            </Box>
        );
    }
}
