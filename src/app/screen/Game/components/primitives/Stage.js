import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../../common/primitives/Box';

export default class World extends React.PureComponent {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        config: PropTypes.shape({
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
            width: this.props.width,
            height: this.props.height,
            xBlocks: this.props.config.xBlocks,
            yBlocks: this.props.config.yBlocks
        };
    }

    render() {
        return (
            <Box
                position="relative"
                width={this.props.width}
                height={this.props.height}
                size={this.props.config.size}
                image={this.props.config.image}
                color={this.props.config.background}
            >
                {this.props.children}
            </Box>
        );
    }
}
