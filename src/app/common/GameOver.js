import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button/Button';

import Box from '../screen/Game/primitives/Box';

import { gameOverSelector } from '../redux/game/selector';

class GameOver extends React.Component {
    static propTypes = {
        onRestart: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    };

    static contextTypes = {
        loop: PropTypes.object,
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
