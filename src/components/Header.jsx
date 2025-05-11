// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cat Tips 🐾
          </Typography>
          <Button color="inherit" component={NavLink} to="/">
            Página Inicial
          </Button>
          <Button color="inherit" component={NavLink} to="/dicas">
            Dicas
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
