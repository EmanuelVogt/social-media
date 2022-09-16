import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import LottieLogin from '../../assets/lottie-login.json'

export function Login(): React.ReactElement {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background:
          'linear-gradient(90deg, rgb(255 255 255 / 0%) 0%, rgb(121 186 255 / 30%) 35%, rgb(75 134 245 / 47%) 96%)',
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Paper sx={{ padding: 2, width: matches ? '60%' : '95%' }}>
            <Typography variant='h5'> Bem vindo! (a) </Typography>
            <Typography> Acesse sua conta! </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 4 }}>
              <Button
                variant='contained'
                sx={{
                  width: matches ? '50%' : '70%',
                  alignSelf: 'center',
                  marginBottom: 1,
                  borderRadius: 20,
                }}
                startIcon={<FacebookIcon />}
              >
                Logar com facebook
              </Button>
              <Button
                variant='contained'
                sx={{
                  width: matches ? '50%' : '70%',
                  alignSelf: 'center',
                  marginBottom: 4,
                  borderRadius: 20,
                }}
                startIcon={<LinkedInIcon />}
              >
                Logar com LinkedIn
              </Button>
              <Divider />
              <TextField
                fullWidth
                required
                id='outlined-required'
                label='Email'
                size='small'
                sx={{ marginTop: 4 }}
              />
              <TextField
                fullWidth
                required
                label='Senha'
                size='small'
                sx={{ marginTop: 4, marginBottom: 4 }}
              />
              <Link> Esqueci minha senha.</Link>
              <Button variant='contained' sx={{ marginTop: 4, marginBottom: 4 }}>
                Enviar
              </Button>
              <Typography>
                Não é cadastrado? <Link>Cadastre-se aqui!</Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {matches && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Player
              autoplay
              loop
              src={LottieLogin}
              style={{ height: '300px', width: '300px', alignSelf: 'center' }}
            ></Player>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
