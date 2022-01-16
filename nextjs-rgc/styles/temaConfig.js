import { createTheme } from '@mui/material/styles';
//import BalooPagi from '../public/fonts/BalooPagi/BalooPaaji2-SemiBold.ttf';

const MyTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  palette: {
    background: {
      default: "#f5f5f5"
    },
    primary: {
      main: '#242424',
    },
    secondary: {
      main: '#4894D2',
    },
    menuIconsColor: {
      main: '#fff',
    },
    inventarioColor: {
      main:'#003F80'
    },
  },
});

export default MyTheme;