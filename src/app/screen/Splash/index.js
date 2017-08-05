import React from 'react';
import Link from 'react-router-dom/Link';

import Button from 'material-ui/Button';
import Content from 'material-ui/Card/CardContent';

import AppLogo from '../../../static/images/logo/logo.png';

import Text from '../../common/primitives/Text';
import Layout from '../../common/primitives/Layout';
import Container from '../../common/primitives/Container';

import styles from './styles';

export default class Splash extends React.Component {
    render() {
        return (
            <Layout>
                <img src={AppLogo} alt="game logo" width="85%" style={styles.img} />
                <Content>
                    <Container margin="75px" padding="10px 0px 0px 0px">
                        <Container margin="10px 0px 0px 0px">
                            <Link to="/game" style={styles.link}>
                                <Button color="accent" raised style={styles.button}>
                                    <Text i18nKey="splash.play" />
                                </Button>
                            </Link>
                        </Container>
                        <Container margin="10px 0px 0px 0px">
                            <Link to="/" style={styles.link}>
                                <Button color="accent" raised style={styles.button}>
                                    <Text i18nKey="splash.instructions" />
                                </Button>
                            </Link>
                        </Container>
                        <Container margin="10px 0px 0px 0px">
                            <Link to="/" style={styles.link}>
                                <Button color="accent" raised style={styles.button}>
                                    <Text i18nKey="splash.score" />
                                </Button>
                            </Link>
                        </Container>
                        <Container margin="10px 0px 0px 0px">
                            <Link to="/" style={styles.link}>
                                <Button color="accent" raised style={styles.button}>
                                    <Text i18nKey="splash.rate" />
                                </Button>
                            </Link>
                        </Container>
                    </Container>
                </Content>
            </Layout>
        );
    }
}
