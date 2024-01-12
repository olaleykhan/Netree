import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Box, Grid } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BaseLabel from './BaseLabel';
import { SxProps } from '@mui/system';
import { ErrorMessage } from 'formik';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
  id: string;
  name?: string;
  label?: string;
  value?: string;
  onChange: (e: SelectChangeEvent) => void;
  options: { value: string; label: string, icon?: string }[];
  error?: boolean;
  showErrorText?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps;
  defaultValue?: string;
  borderColor?: string;
  touched?: boolean;
}

function displayValue(value: string, options: { value: string; label: string }[]) {
  const selectedOption = options.find((option) => option.value === value);
  if (selectedOption) {
    return selectedOption.label;
  }
  return '';
}

const BaseSelect: React.FC<Props> = ({
  id,
  name = id,
  label,
  value,
  onChange,
  options,
  error,
  showErrorText = true,
  sx,
  fullWidth = true,
  disabled,
  borderColor = 'grey.900',
  touched,
  ...rest
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event, "event")
    onChange(event);
  };
  return (
    <Box sx={{ width: '100%' }}>
      {label && <BaseLabel label={label} htmlFor={name} />}
      <Box width="100%">
        <Select
          IconComponent={KeyboardArrowDownIcon}
          // defaultValue={defaultValue}
          displayEmpty
          disabled={disabled}
          {...rest}
          fullWidth={fullWidth}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          renderValue={(selected) => displayValue(selected as string, options) || `Select Options`}
          sx={{
            height: '4rem',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: error ? 'error.main' : borderColor },
            ...sx
          }}
          error={error}
          MenuProps={{
            sx: { '& .MuiMenu-paper': { backgroundColor: 'background.default', py: 0.5 } }
          }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value} sx={{ bgcolor: 'background.default', fontSize: '1.2rem', my: 0.5 }}>
                 <Grid container alignItems="center" columnSpacing={2} wrap="nowrap" >
              <Grid item > {option.icon && <Box component="img" src={option.icon} sx={{ width: 24, height: 24 }} />}  </Grid>
              <Grid item >   {option.label}</Grid>
            </Grid>
          </MenuItem>


          ))}
        </Select>
      </Box>
      {showErrorText && error && touched && <ErrorMessage render={(text) => <FormHelperText error> {text}</FormHelperText>} name={name} />}
    </Box>
  );
};

export default BaseSelect;
