import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteColor } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        black: PaletteColor;
        sand: PaletteColor;
        yellow: PaletteColor;
    }

    interface PaletteOptions {
        black: SimplePaletteColorOptions;
        sand: SimplePaletteColorOptions;
        yellow: SimplePaletteColorOptions;
    }
}

const black: PaletteColor = {
    main: '#000000',
    light: '#000000',
    dark: '#000000',
    contrastText: '#ffffff'
};

const sand: PaletteColor = {
    main: '#dbcfb0',
    light: '#ffffe2',
    dark: '#a99e80',
    contrastText: '#000000'
};

const yellow: PaletteColor = {
    main: '#fcba04',
    light: '#ffec4e',
    dark: '#c48a00',
    contrastText: '#000000'
};

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        black,
        sand,
        yellow
    }
});

export default theme;
