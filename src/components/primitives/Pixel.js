import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

export default class Pixel extends React.Component {
    static contextTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        xBlocks: PropTypes.number,
        yBlocks: PropTypes.number
    };

    render() {
        const pixelWidth = Math.floor(this.context.width / this.context.xBlocks);
        const pixelHeight = Math.floor(this.context.height / this.context.yBlocks);

        const x = this.props.position.x * this.context.xBlocks;
        const y = this.props.position.y * this.context.yBlocks;

        return (
            <Box position="absolute" width={pixelWidth} height={pixelHeight} color={this.props.color} left={x} top={y}>
                {this.props.children}
            </Box>
        );
    }
}
