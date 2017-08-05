import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog/Dialog';
import FlatButton from 'material-ui/FlatButton/FlatButton';

export default class GameOverDialog extends React.Component {
    static propTypes = {
        onRestart: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    };

    state = {
        open: this.props.gameOver
    };

    render() {
        const actions = [<FlatButton label="RESTART GAME" onTouchTap={this.closeDialogAndRestartGame} />];

        return (
            <Dialog title="Game Over" actions={actions} open={this.props.open}>
                <p>Ups, you have loose!</p>
            </Dialog>
        );
    }

    closeDialogAndRestartGame = () => {
        if (this.props.onRestart) {
            this.props.onRestart();
        }

        this.closeDialog();
    };

    closeDialog = () =>
        this.setState(state => ({
            open: !state.open
        }));
}
