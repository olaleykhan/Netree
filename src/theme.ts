import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

// Define the colors
const primaryColor = '#633CFF';
const secondaryColor = '#BEADFF';
const backgroundColor = '#EFEBFF';
const textColor = '#333333';
const grayColor = '#737373';
const lightGrayColor = '#D9D9D9';
const whiteColor = '#FAFAFA';
const blackColor = '#333333';
const errorColor = '#FF3939';

const spacingUnit = 8;
const spacing = (factor: number) => `${factor * 0.8}rem`;

const theme = createTheme({
  // spacing: (factor:number) => spacing(factor),  
  spacing: (factor: number) => `${factor * 0.8}rem`,
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
    },
    text: {
      primary: textColor,
      secondary: grayColor,
    },
    common: {
      black: blackColor,
      white: whiteColor,
    },
    error: {
      main: errorColor,
    },
    action: {
      disabled: lightGrayColor,
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: blackColor,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
      color: blackColor,
    },
    // Add more typography styles as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Primary button styles
          '&.MuiButton-contained': {
            background: `var(--Purple, ${primaryColor})`,
            '&:active': {
              background: `var(--purple-hover-color, ${secondaryColor})`,
              boxShadow: `0px 0px ${spacing(4)} 0px rgba(99, 60, 255, 0.25)`,
            },
          },
          // Outlined button styles
          '&.MuiButton-outlined': {
            border: `1px solid var(--Purple, ${primaryColor})`,
            '&:active': {
              background: `var(--Light-Purple, ${backgroundColor})`,
            },
          },
        },
      },
    },
  },
});

export default theme;
 