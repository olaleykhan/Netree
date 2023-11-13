import React from 'react'
import {Box, Container, Grid, Typography, Button, OutlinedInput, TextField, FormControl} from '@mui/material'
const AuthWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Box p={4} sx={{
        maxWidth:{
            xs: 311,
            sm: 476,
        },
        margin: '0 auto',
        // backgroundColor:'orange',
        minHeight: '100vh',
        display: 'flex',
        // alignItems: 'stretch',
        justifyItems: 'center',
        justifyContent: 'center',
    }}>
    <Container disableGutters maxWidth={false}>
        <Box sx={{
        // border: '1px solid green'
    }} >
            {children}
        </Box>

    </Container>

</Box>
  )
}

export default AuthWrapper