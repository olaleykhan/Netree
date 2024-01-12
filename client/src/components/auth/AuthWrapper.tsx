import React from 'react'
import {Box, Container } from '@mui/material'
const AuthWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Box p={4} sx={{
        maxWidth:{
            xs: 311,
            sm: 476,
        },
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        justifyItems: 'center',
        justifyContent: 'center',
    }}>
    <Container disableGutters maxWidth={false}>
        <Box sx={{
    }} >
            {children}
        </Box>

    </Container>

</Box>
  )
}

export default AuthWrapper