import React from 'react';
import PropTypes from 'prop-types';

import Box from '../primitives/Box';

export default class BoardProvider extends React.Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        xBlocks: PropTypes.number,
        yBlocks: PropTypes.number,
        backgroundColor: PropTypes.string
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
            xBlocks: this.props.xBlocks,
            yBlocks: this.props.yBlocks
        };
    }

    render() {
        return (
            <Box width={this.props.width} height={this.props.height} color={this.props.backgroundColor}>
                {this.props.children}
            </Box>
        );
    }
}
