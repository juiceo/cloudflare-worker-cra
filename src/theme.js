import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        black: {
            main: '#000000',
            light: '#000000',
            dark: '#000000',
            contrastText: '#ffffff'
        },
        sand: {
            main: '#dbcfb0',
            light: '#ffffe2',
            dark: '#a99e80',
            contrastText: '#000000'
        },
        yellow: {
            main: '#fcba04',
            light: '#ffec4e',
            dark: '#c48a00',
            contrastText: '#000000'
        }
    }
});

export default theme;
