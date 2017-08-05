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

import { gameOverSelector } from '../../../redux/game/selector';

class GameOver extends React.Component {
    static propTypes = {
        onRestart: PropTypes.func.isRequired,
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
        return (
            <Box>
                <Dialog open={this.props.open}>
                    <DialogTitle>
                        Game Over
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Ups, you have loose!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeDialog} color="primary">
                            RESTART GAME
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
    open: gameOverSelector(state)
});

export default connect(mapStateToProps)(GameOver);
