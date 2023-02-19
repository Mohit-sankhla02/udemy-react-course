import React from 'react'
import {Container, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from '@mui/material';
import KeyBoard from '@mui/icons-material/KeyboardSharp'



function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <KeyBoard/>
          <Typography variant='h6'>
            Monkeytype
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='text-primary' gutterBottom>
              Let's Begin
            </Typography>
            <Typography variant='h5' align='center' color='text-secondary' paragraph>
              This is a spoof of the website monkeytype.com, please keep it copyright proof
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
