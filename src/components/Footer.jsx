// src/components/Footer.jsx
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'primary.contrastText', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          Feito com ❤️ em memória do Caqui
        </Typography>
      </Container>
    </Box>
  );
}
