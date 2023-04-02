import { createTheme } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[300],
    },
  },
});
