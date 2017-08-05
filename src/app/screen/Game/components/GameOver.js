import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';

import Button from 'material-ui/Button/Button';

import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';

import Box from '../../../common/primitives/Box';
import Text from '../../../common/primitives/Text';

import { gameOverSelector, scoreSelector } from '../../../redux/game/selector';

class GameOver extends React.Component {
    static propTypes = {
        score: PropTypes.number.isRequired,
        open: PropTypes.bool.isRequired
    };

    static contextTypes = {
        eventLoop: PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.open) {
            this.context.eventLoop.stop();
        }
    }

    render() {
        const options = {
            score: this.props.score
        };

        return (
            <Box>
                <Dialog open={this.props.open}>
                    <DialogTitle>
                        <Text i18nKey="game.over"/>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Text i18nKey="game.score" options={options}/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="accent" onClick={this.closeDialog}>
                            <Text i18nKey="game.retry"/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        );
    }

    closeDialog = () => {
        this.props.dispatch({ type: 'RESET' });
        this.context.eventLoop.start();
    };
}

const mapStateToProps = state => ({
    open: gameOverSelector(state),
    score: scoreSelector(state)
});

export default connect(mapStateToProps)(GameOver);
