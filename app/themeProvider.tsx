import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // A green shade
    },
    secondary: {
      main: '#ff9800', // An orange shade
    },
    background: {
      default: '#f5f5f5', // A light gray shade for the background
    },
    text: {
      primary: '#3f3f3f', // Dark text color
      secondary: '#7f7f7f', // Light text color
    },
  },
  typography: {
    fontFamily: 'Arial',
  },
  // Add other theme properties as needed
});

export default theme;
