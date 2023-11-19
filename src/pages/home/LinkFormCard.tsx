import React from 'react'
import {Grid, Box, Typography, Button} from '@mui/material'
import Input from '@/components/base/Input'
import BaseSelect from '@/components/base/BaseSelect'
import { SelectChangeEvent } from '@mui/material/Select';
import { LINK_OPTIONS } from './constants';

const LinkFormCard = () => {

    const [value, setValue] = React.useState('');
    // 
//   onChange: (e: SelectChangeEvent) => void;
const onChange = (e: SelectChangeEvent) => {
    console.log(e, "from selecvt")
    setValue(e.target.value)



}
  return (
    <Box>
        <Grid container wrap="nowrap" justifyContent="space-between" alignItems="center" >
            <Grid item> <Typography variant="body2"> == Link # NO</Typography> </Grid>
            <Grid item>  <Button>Remove</Button>  </Grid>
        </Grid>

        <BaseSelect onChange={onChange} value={value} label="Link type" id="select" options={LINK_OPTIONS} />
    </Box>
  )
}

export default LinkFormCard