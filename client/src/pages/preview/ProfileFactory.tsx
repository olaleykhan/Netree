import React from 'react'
import {Box , Grid, Container, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';

const ProfileFactory = () => {
    const theme = useTheme();
  return (
  <Box mt={6} >
    <Container >
    <Grid container justifyItems="center" alignItems="center" direction="column" spacing={4}  >
    <Grid item >  <Box sx={{
        width: '10.8rem',
        height: '10.8rem',
        bgcolor: theme.palette.primary.main,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}  >
        <Box sx={{
            width: '10rem',
            height: '10rem',
            bgcolor: 'white',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center',
            overflow: 'hidden',
        }}  component="img" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    </Box></Grid>
    <Grid item > 
        <Typography variant="h1" align='center' >Lekan Ojo Tami munidieru</Typography>
        <Typography align='center'  variant="body1" >Frontend Developer</Typography>
     </Grid>

   </Grid>
    </Container>
  </Box>
  )
}

export default ProfileFactory