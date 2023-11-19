import React from 'react'

import { Box, Card, CardMedia, Typography, Grid } from "@mui/material"
import LinkFormCard from './LinkFormCard'

const LinkAdder = () => {
  return (
    <Card sx={{
        bgcolor:"#fafafa",
        m:3,
        py: 8,
        px:2,
       }} >
       <Box component="form" >
        <LinkFormCard />
        <LinkFormCard />
        <LinkFormCard />
      
       </Box>
        
       </Card>
  )
}

export default LinkAdder