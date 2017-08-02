import React from 'react';
import PropTypes from 'prop-types';

import Box from '../primitives/Box';

export default class World extends React.Component {
    static propTypes = {
        config: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
            xBlocks: PropTypes.number,
            yBlocks: PropTypes.number,
            background: PropTypes.string
        })
    };

    static childContextTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        xBlocks: PropTypes.number,
        yBlocks: PropTypes.number
    };

    getChildContext() {
        return {
            width: this.props.config.width,
            height: this.props.config.height,
            xBlocks: this.props.config.xBlocks,
            yBlocks: this.props.config.yBlocks
        };
    }

    render() {
        return (
            <Box
                width={this.props.config.width}
                height={this.props.config.height}
                color={this.props.config.background}
                position="relative"
            >
                {this.props.children}
            </Box>
        );
    }
}
