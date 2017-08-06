import React from 'react';
import PropTypes from 'prop-types';

import Card from 'material-ui/Card/Card';

import Flex from './Flex';
import Container from './Container';

export default class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    };

    static defaultProps = {
        width: '45.5vw',
        height: '100vh'
    };

    render() {
        return (
            <Container backgroundColor="#FFE082" height="100vh" width="100vw">
                <Flex backgroundColor="transparent" height="100vh" width="100vw">
                    <Card>
                        <Container backgroundColor="#388E3C" height={this.props.height} width={this.props.width}>
                            {this.props.children}
                        </Container>
                    </Card>
                </Flex>
            </Container>
        );
    }
}
