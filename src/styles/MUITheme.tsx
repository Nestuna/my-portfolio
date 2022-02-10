import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#231F2E',
    },
    secondary: {
      main: '#F0CDB3',
      dark: '#FF9E56'
    },
    background: {
      default: '#231F2E',
      paper: '#c6a700'
    },
    text: {
      primary: '#eee',
      secondary: '#ccc'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 800
    },
    h2: {
      fontWeight: 800
    }
  }
});

export default theme;