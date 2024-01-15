import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
      <App />
      <p> main guy</p>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
