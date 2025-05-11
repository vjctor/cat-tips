// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main:   '#B19CD9',  // lilás médio
      light:  '#D8B4FE',  // roxo claro
      dark:   '#8A2BE2',  // roxo mais escuro
      contrastText: '#FFFFFF'
    },
    secondary: {
      main:   '#E6E6FA',  // lavanda
      contrastText: '#242124'
    },
    background: {
      default: '#D8B4FE', // roxo claro em todo o body
      paper:   '#FFFFFF'  // branco para componentes Paper/Card
    },
    text: {
      primary:   '#242124', // quase preto para texto
      secondary: '#4A4A4A'  // cinza escuro para subtítulos
    }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});

export default theme;
