import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

export default class Pixel extends React.Component {
    static propTypes = {
        zIndex: PropTypes.number,
        image: PropTypes.string,
        color: PropTypes.string.isRequired,
        position: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        })
    };

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
            <Box
                size={`${pixelWidth}px ${pixelHeight}px`}
                image={this.props.image}
                color={this.props.color}
                position="absolute"
                height={pixelHeight}
                width={pixelWidth}
                left={x}
                top={y}
                zIndex={this.props.zIndex}
            >
                {this.props.children}
            </Box>
        );
    }
}
