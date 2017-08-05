import React from 'react';
import PropTypes from 'prop-types';

const Container = props =>
    <div
        style={{
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.width,
            padding: props.padding,
            margin: props.margin
        }}
    >
        {props.children}
    </div>;

Container.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string
};

export default Container;
