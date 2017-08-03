import React from 'react';
import PropTypes from 'prop-types';

const Flex = ({ style = {}, children }) =>
    <div
        style={{
            ...style,
            backgroundColor: '#414141',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            height: '100vh',
            width: '100vw'
        }}
    >
        {children}
    </div>;

Flex.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any
};

export default Flex;
