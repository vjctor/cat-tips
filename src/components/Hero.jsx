// src/components/Hero.jsx
import { Box, Typography, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo ao CAT TIPS!
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', maxWidth: 600, mx: 'auto' }}
        >
          O CAT TIPS é a sua plataforma web dedicada a compartilhar as melhores dicas e
          informações sobre adestramento felino. Aqui você vai encontrar orientações práticas
          para educar seu gato com reforço positivo, estabelecer rotinas saudáveis e melhorar o
          vínculo entre você e seu amigo de quatro patas.
        </Typography>
      </Container>
    </Box>
  );
}
