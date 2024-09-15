import { createTheme } from '@mui/material/styles';

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: '#5c366f',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  },
});