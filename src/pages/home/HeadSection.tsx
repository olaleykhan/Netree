import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const HeadSection = () => {
  return (
 <Box  mt={4}>
      <Container>
    <Box mb={4}>
    <Typography variant='h2' gutterBottom > Customize your links </Typography>
    <Typography variant='body1'>
        Add/Edit/remove links below and then share all your profiles with the world!
    </Typography>
    </Box>
    <Button sx={{
        fontSize: '1.6rem',
        fontWeight: 600,
        lineHeight: '150%',
    }} startIcon={<AddIcon />} variant='outlined' fullWidth>Add new Link</Button>
   </Container>
 </Box>
  )
}

export default HeadSection