import React from 'react'
import { Box } from '@mui/material'
import HeadSection from './HeadSection'
import GetStarted from './GetStarted'
import LinkAdder from './LinkAdder'

const Home = () => {
  return (
    <Box>
      <HeadSection />
      {/* <GetStarted /> */}
      <LinkAdder />
    </Box>
  )
}

export default Home