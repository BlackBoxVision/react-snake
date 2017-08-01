import React from 'react';

const Box = props =>
    <div
        style={{
            top: `${props.top}px`,
            left: `${props.left}px`,
            position: props.position,
            width: `${props.width}px`,
            height: `${props.height}px`,
            backgroundColor: props.color
        }}
    >
        {props.children}
    </div>;

export default Box;
