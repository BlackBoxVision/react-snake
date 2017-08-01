import React from 'react';

import Pixel from '../primitives/Pixel';

export default class Snake extends React.Component {
    render() {
        return (
            <div>
                <Pixel color="green" position={this.props.head} />
            </div>
        );
    }
}
