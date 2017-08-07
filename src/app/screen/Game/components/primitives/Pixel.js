import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../../common/primitives/Box';

export default class Pixel extends React.PureComponent {
    static propTypes = {
        size: PropTypes.string,
        margin: PropTypes.number,
        padding: PropTypes.number,
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

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.position.x !== nextProps.position.x || this.props.position.y !== nextProps.position.y);
    }

    render() {
        const pixelWidth = Math.floor(this.context.width / this.context.xBlocks);
        const pixelHeight = Math.floor(this.context.height / this.context.yBlocks);

        const x = this.props.position.x * this.context.xBlocks;
        const y = this.props.position.y * this.context.yBlocks;

        return (
            <Box
                size={this.props.size}
                image={this.props.image}
                color={this.props.color}
                position="absolute"
                height={pixelHeight}
                width={pixelWidth}
                left={x}
                top={y}
                zIndex={this.props.zIndex}
                padding={this.props.padding}
                margin={this.props.margin}
            >
                {this.props.children}
            </Box>
        );
    }
}
