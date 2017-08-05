import React from 'react';
import Link from 'react-router-dom/Link';

import Button from 'material-ui/Button';

import Layout from '../../common/Layout';
import Container from '../../common/Container';

import AppLogo from '../../../static/images/logo/logo.png';

import styles from './styles';

export default class Splash extends React.Component {
    render() {
        return (
            <Layout>
                <img src={AppLogo} alt="game logo" width="85%" style={styles.img} />
                <Container margin="75px" padding="10px 0px 0px 0px">
                    <Container margin="10px 0px 0px 0px">
                        <Link to="/game">
                            <Button raised style={styles.button}>
                                PLAY
                            </Button>
                        </Link>
                    </Container>
                    <Container margin="10px 0px 0px 0px">
                        <Link to="/">
                            <Button raised style={styles.button}>
                                INSTRUCTIONS
                            </Button>
                        </Link>
                    </Container>
                    <Container margin="10px 0px 0px 0px">
                        <Link to="/">
                            <Button raised style={styles.button}>
                                HIGH SCORE
                            </Button>
                        </Link>
                    </Container>
                    <Container margin="10px 0px 0px 0px">
                        <Link to="/">
                            <Button raised style={styles.button}>
                                RATE
                            </Button>
                        </Link>
                    </Container>
                </Container>
            </Layout>
        );
    }
}
