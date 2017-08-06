import React from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';
import Box from './Box';

class Text extends React.PureComponent {
    static propTypes = {
        translate: PropTypes.func.isRequired,
        i18nKey: PropTypes.string.isRequired,
        options: PropTypes.object
    };

    static defaultProps = {
        options: {}
    };

    render() {
        return (
            <Box>
                {this.props.translate(this.props.i18nKey, this.props.options)}
            </Box>
        );
    }
}

export default translate(null, { translateFuncName: 'translate' })(Text);
