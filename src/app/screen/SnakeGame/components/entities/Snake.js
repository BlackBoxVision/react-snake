import React from 'react';
import PropTypes from 'prop-types';

import SnakeSkin from '../../../../../static/images/snake/skin1.jpg';

import Pixel from '../primitives/Pixel';

export default class Snake extends React.PureComponent {
    static propTypes = {
        head: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        tail: PropTypes.array
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.head !== nextProps.head || this.props.tail.length !== nextProps.tail.length) {
            return true;
        }

        return false;
    }

    render() {
        const { head, tail } = this.props;

        return (
            <div>
                <Pixel zIndex={100} color="green" position={head} image={`url(${SnakeSkin})`} size="20px 20px" />
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
