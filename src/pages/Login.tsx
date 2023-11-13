import React from 'react'
import {Box, Container, Grid, Typography, Button, OutlinedInput, TextField, FormControl} from '@mui/material'
import AuthWrapper from '@/components/auth/AuthWrapper'
import Input from '@/components/base/Input'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
  return (
   <Box sx={{
    border: '1px solid black',
   }} >
     <AuthWrapper>
        <Typography variant='h1' > Netree </Typography>

        <Box mt={8} sx={{
            // border: '1px solid black'
        }} >
            <Typography variant="h2" >
                Login
            </Typography>
            <Typography>
            input login details to get back into the app
            </Typography>

            <Box component="form" >
                <Input label="Email" name="email" type="email" value={email} id="email" onChange={handleEmailChange} />

            </Box>

        </Box>
    </AuthWrapper>
   </Box>
  )
}

export default Login