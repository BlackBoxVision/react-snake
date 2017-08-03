import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import Flex from '../../components/Flex';
import Container from '../../components/Container';

export default class Splash extends React.Component {
    render() {
        return (
            <Container backgroundColor="#FFE082" height="100vh" width="100vw">
                <Flex backgroundColor="transparent" height="100vh" width="100vw">
                    <Card>
                        <Container backgroundColor="#388E3C" height="100vh" width="45.5vw">
                            <CardText>
                                <RaisedButton containerElement={<Link to="/game" />} label="Start Game" />
                            </CardText>
                        </Container>
                    </Card>
                </Flex>
            </Container>
        );
    }
}
