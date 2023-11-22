import { Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LinkCard = () => {
  return (
    <Button fullWidth variant="contained" endIcon={<ArrowForwardIcon fontSize='small' />} startIcon={<GitHubIcon fontSize='small' />} sx={{
        justifyContent: 'flex-start',
        p: '3rem',
        // maxWidth: '30rem',
        '& .MuiButton-endIcon': {
            ml: 'auto'
        }

    }} >
      Link
    </Button>
  )
}

export default LinkCard