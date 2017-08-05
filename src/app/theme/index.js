import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';

import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

export default createMuiTheme({
    palette: createPalette({
        primary: green,
        accent: {
            ...green,
            A400: '#69F0AE',
        },
        error: red,
    })
});