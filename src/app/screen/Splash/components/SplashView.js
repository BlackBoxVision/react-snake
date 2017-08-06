import React from 'react';
import PropTypes from 'prop-types';

import Content from 'material-ui/Card/CardContent';

import AppLogo from '../../../../static/images/logo/logo.png';

import Layout from '../../../common/primitives/Layout';
import Container from '../../../common/primitives/Container';

import HrefButton from '../components/HrefButton';

import styles from '../styles';

export default class SplashView extends React.Component {
    static propTypes = {
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        logo: PropTypes.shape({
            height: PropTypes.string.isRequired,
            width: PropTypes.string.isRequired
        })
    };

    render() {
        return (
            <Layout height={this.props.height} width={this.props.width}>
                <img
                    src={AppLogo}
                    alt="game logo"
                    height={this.props.logo.height}
                    width={this.props.logo.width}
                    style={styles.img}
                />
                <Content>
                    <Container margin="75px" padding="10px 0px 0px 0px">
                        <HrefButton to="/game" i18nKey="splash.play" />
                        <HrefButton to="/" i18nKey="splash.instructions" />
                        <HrefButton to="/" i18nKey="splash.score" />
                        <HrefButton to="/" i18nKey="splash.rate" />
                    </Container>
                </Content>
            </Layout>
        );
    }
}
