import React from 'react'
import {Box, Grid,Button, Typography} from '@mui/material'
import Header from '../layout/Header'

const Home = () => {
  return (
  <Box>
    <Header/>
    <Grid container >
        <Grid xs={12} md={6} item>1</Grid>
        <Grid xs={12} md={6} item>2</Grid>
        <Button color="primary" variant='contained'> click me </Button>
    </Grid>
  </Box>
  )
}

export default Home