import React from 'react';
import PropTypes from 'prop-types';

import SnakeSkin from '../../../../images/snake/skin1.jpg';

import Pixel from '../primitives/Pixel';

export default class Snake extends React.Component {
    static propTypes = {
        head: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }).isRequired,
        tail: PropTypes.array.isRequired
    };

    render() {
        const { head, tail } = this.props;

        return (
            <div>
                <Pixel zIndex={100} color="green" position={head} image={`url(${SnakeSkin})`} size="20px 20px"/>
                {tail.map((it, index) =>
                    <Pixel
                        key={`snake-tail-${index}`}
                        zIndex={100}
                        color="green"
                        position={it}
                        image={`url(${SnakeSkin})`}
                        size="20px 20px"
                    />
                )}
            </div>
        );
    }
}
