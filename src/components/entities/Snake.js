import React from 'react';
import PropTypes from 'prop-types';

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
                <Pixel color="green" position={head} />
                {tail.map(it => <Pixel color="green" position={it} />)}
            </div>
        );
    }
}
