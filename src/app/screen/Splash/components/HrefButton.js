import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

import Button from 'material-ui/Button';

import Text from '../../../common/primitives/Text';
import Container from '../../../common/primitives/Container';

import styles from '../styles';

export default class HrefButton extends React.Component {
    static propTypes = {
        i18nKey: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    };

    render() {
        return (
            <Container margin="10px 0px 0px 0px">
                <Link to={this.props.to} style={styles.link}>
                    <Button color="accent" raised style={styles.button}>
                        <Text i18nKey={this.props.i18nKey} />
                    </Button>
                </Link>
            </Container>
        );
    }
}
