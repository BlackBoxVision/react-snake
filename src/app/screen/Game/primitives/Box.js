import React from 'react';
import PropTypes from 'prop-types';

const Box = props =>
    <div
        style={{
            top: `${props.top}px`,
            left: `${props.left}px`,
            position: props.position,
            width: `${props.width}px`,
            height: `${props.height}px`,
            backgroundColor: props.color,
            backgroundImage: props.image,
            backgroundSize: props.size,
            zIndex: props.zIndex,
            margin: props.margin,
            padding: props.padding
        }}
    >
        {props.children}
    </div>;

Box.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    position: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    image: PropTypes.string,
    size: PropTypes.string,
    zIndex: PropTypes.number,
    padding: PropTypes.number,
    margin: PropTypes.number
};

export default Box;
