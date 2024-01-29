import React from 'react'

import { Box, Card, Typography, Button} from '@mui/material'
import Input from '@/components/base/Input'

const ProfileTab = () => {

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
  return (
    <Box>
        {/* head section */}

        <Card sx={{
    bgcolor:"#fafafa",
    m:3,
    py: 8,
    px:2.5,
   }} >
    <Box>
            <Typography variant='h2' gutterBottom >Profile Details</Typography>
            <Typography variant='body1' gutterBottom >Add your details to create a personal touch to your profile.</Typography>
        </Box>

        <Box pt={6} >
            <Typography gutterBottom > Profile Picture</Typography>
            <Box p={1} >
                <Box sx={{
                    width:"19rem",
                    height:"19rem",
                    // border:"1px solid grey",
                    borderRadius:"12px",
                    bgcolor:"background.paper",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                    fontWeight:600,
                    fontSize:"1.5rem",
                }} component={Button} > + Upload Image </Box>
                <Typography variant='caption' >image must be below 1024*1024px. use PNG or JPG format. </Typography>
                

                
            </Box>

            <Input label="First name*" id="first-name" onChange={handleChange} name="first-name" />
            <Input label="Last name*" id="last-name" onChange={handleChange} name="last-name" />
            <Input label="email*" id="email" onChange={handleChange} name="email" />

            <Button fullWidth sx={{
                mt:4
            }} variant='contained' >Save</Button>
        </Box>
    
   </Card>
    
    </Box>
  )
}

export default ProfileTab