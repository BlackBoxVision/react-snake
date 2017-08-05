import React from 'react';
import PropTypes from 'prop-types';

const Flex = props =>
    <div
        style={{
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            height: props.height,
            width: props.width
        }}
    >
        {props.children}
    </div>;

Flex.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.any
};

export default Flex;
