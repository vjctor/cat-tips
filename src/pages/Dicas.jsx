// src/pages/Dicas.jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Card, CardContent, Typography, Container, Box, CircularProgress } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Dicas() {
  const [dicas, setDicas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8080/dicas')
      .then(res => {
        setDicas(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Falha ao carregar dicas.')
        setLoading(false)
      })
  }, [])

  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Dicas de Adestramento
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}

        {!loading && !error && (
          <Grid container spacing={4}>
            {dicas.map(d => (
              <Grid item key={d.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {d.titulo}
                    </Typography>
                    <Typography variant="body2">
                      {d.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </Box>
  )
}
