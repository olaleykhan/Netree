import React from 'react'
import {Grid, Box, Typography, Button} from '@mui/material'
import Input from '@/components/base/Input'
import BaseSelect from '@/components/base/BaseSelect'
import { SelectChangeEvent } from '@mui/material/Select';
import { LINK_OPTIONS } from './constants';
import IconLink from "@/assets/images/icon-link.svg"
import LinkIcon from '@mui/icons-material/Link';

const LinkFormCard = () => {

    const [value, setValue] = React.useState('');
    const [linkValue, setLinkValue] = React.useState('');
    // 
//   onChange: (e: SelectChangeEvent) => void;
const handleSelect = (e: SelectChangeEvent) => {
    console.log(e, "from selecvt")
    setValue(e.target.value)
}

const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setLinkValue(e.target.value)
}
  return (
    <Box my={6} mx={2}>
        <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center" >
            <Grid item> <Typography variant="body2"> == Link # NO</Typography> </Grid>
            <Grid item>  <Button>Remove</Button>  </Grid>
        </Grid>

        <BaseSelect onChange={handleSelect} value={value} label="platform" id="select" options={LINK_OPTIONS} />

        <Box mt={2}>
            <Input startAdornment={<LinkIcon sx={{ mr:2 }}/>} fullWidth label="Link" name="link" type="text" value={linkValue} id="link" onChange={handleChangeLink} placeholder='E.G: "https://x.com/lekan_dev' />
        </Box>
    </Box>
  )
}

export default LinkFormCard