import { createTheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

export const lightThemeMaterial = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[300],
    },
  },
});