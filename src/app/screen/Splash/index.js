import React from 'react';
import { Link } from 'react-router-dom';

import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import Layout from '../../common/Layout';
import Container from '../../common/Container';

import AppLogo from '../../../static/images/logo/logo.png';

const styles = {
    button: {
        height: 50
    },
    img: {
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50
    }
};

export default class Splash extends React.Component {
    render() {
        return (
            <Layout>
                <img src={AppLogo} alt="game logo" width="85%" style={styles.img} />
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
            </Layout>
        );
    }
}
