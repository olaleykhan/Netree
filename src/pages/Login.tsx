import React from 'react'
import { Box, Container, Grid, Typography, Button, OutlinedInput, TextField, FormControl } from '@mui/material'
import { Link } from 'react-router-dom'
import AuthWrapper from '@/components/auth/AuthWrapper'
import Input from '@/components/base/Input'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <Box sx={{
            border: '1px solid black',
        }} >
            <AuthWrapper>
                <Typography variant='h1' > Netree </Typography>

                <Box mt={8}  >
                    <Typography gutterBottom variant="h2" >
                        Login
                    </Typography>
                    <Typography gutterBottom >
                        Input login details to get back into the app
                    </Typography>

                    <Box component="form" >
                        <Grid container rowGap={3} >
                            <Grid item xs={12} >
                                <Input fullWidth label="Email" name="email" type="email" value={email} id="email" onChange={handleEmailChange} placeholder='Enter your email' />
                            </Grid>
                            <Grid item xs={12}>
                                <Input label="Password" name="password" type="password" value={password} id="password" onChange={handlePasswordChange} placeholder='Enter your password' />
                            </Grid>
                            <Grid item xs={12} >
                                <Button component={Link} to="/" fullWidth variant="contained" >Login</Button>
                            </Grid>
                        </Grid>
                    </Box>
                  <Box pt={2} >
                  <Grid container justifyContent="center" direction="column" alignItems="center" >
                       <Grid item xs={12}> <Typography variant='body1'> Don't have an account? </Typography></Grid>
                       <Grid item xs={12}><Button component={Link} to="/signup" > Create Account</Button></Grid>
                        
                    </Grid>
                  </Box>

                </Box>
            </AuthWrapper>
        </Box>
    )
}

export default Login