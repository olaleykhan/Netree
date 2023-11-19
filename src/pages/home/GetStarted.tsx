import React from 'react'
import getStarted from '@/assets/get-started.svg'
import { Box, Card, CardMedia, Typography, Grid } from "@mui/material"
const GetStarted = () => {
  return (
   <Card sx={{
    bgcolor:"#fafafa",
    m:3,
    py: 8,
    px:2.5,
   }} >
    <Grid container justifyContent="center" alignItems="center" >
    <CardMedia component="img" src={getStarted} sx={{width: 124, height:80}}/>
    </Grid>
   <Box >
   <Typography variant='h2' align='center' gutterBottom >Let’s get you started</Typography>
    <Typography variant='body1' align='justify' >Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</Typography>
   </Box>
    
   </Card>
  )
}

export default GetStarted