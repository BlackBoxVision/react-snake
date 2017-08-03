import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import Flex from '../../components/Flex';
import Container from '../../components/Container';

const styles = {
    button: {
        height: 50
    }
};

export default class Splash extends React.Component {
    render() {
        return (
            <Container backgroundColor="#FFE082" height="100vh" width="100vw">
                <Flex backgroundColor="transparent" height="100vh" width="100vw">
                    <Card>
                        <Container backgroundColor="#388E3C" height="100vh" width="45.5vw">
                            <img src={require('../../images/logo/logo.png')} alt="game logo" width="85%" style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 50 }}/>
                            <CardText>
                                <Container margin="75px" padding="10px 0px 0px 0px">
                                    <Container margin="10px 0px 0px 0px">
                                        <RaisedButton
                                            containerElement={<Link to="/game" />}
                                            label="PLAY"
                                            backgroundColor="#69F0AE"
                                            style={styles.button}
                                            fullWidth
                                        />
                                    </Container>
                                    <Container margin="10px 0px 0px 0px">
                                        <RaisedButton
                                            containerElement={<Link to="/" />}
                                            label="INSTRUCTIONS"
                                            backgroundColor="#69F0AE"
                                            style={styles.button}
                                            fullWidth
                                        />
                                    </Container>
                                    <Container margin="10px 0px 0px 0px">
                                        <RaisedButton
                                            containerElement={<Link to="/" />}
                                            label="HIGH SCORE"
                                            backgroundColor="#69F0AE"
                                            style={styles.button}
                                            fullWidth
                                        />
                                    </Container>
                                    <Container margin="10px 0px 0px 0px">
                                        <RaisedButton
                                            containerElement={<Link to="/" />}
                                            label="RATE"
                                            backgroundColor="#69F0AE"
                                            style={styles.button}
                                            fullWidth
                                        />
                                    </Container>
                                </Container>
                            </CardText>
                        </Container>
                    </Card>
                </Flex>
            </Container>
        );
    }
}
