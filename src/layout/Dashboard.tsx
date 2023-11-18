import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header'

const Dashboard = () => {
  return (
    <Box>
      <Header />

     <Box px={2} >
     <Outlet />
     </Box>
    </Box>
  )
}

export default Dashboard