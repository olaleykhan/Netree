import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', boxShadow: 'none' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container direction="row" alignItems="center" wrap='nowrap'  spacing="auto" >
            <Grid item xs="auto">
            <LogoDevIcon sx={{ mr: 1, fontSize: '3rem' }} color="primary" /> 
            </Grid>
            <Grid container item justifyContent="center">
              <Grid item>
                <IconButton>
                  <LinkOutlinedIcon sx={{ mr: 1, fontSize: '3rem' }} color="primary" />
                </IconButton>
              </Grid>
              <Grid item>
              <IconButton>
                  <AccountCircleOutlinedIcon sx={{ mr: 1, fontSize: '3rem' }} color="primary" />
                </IconButton>
              </Grid>

            </Grid>
            <Grid xs="auto" item>

              <Button component={Link} to="/preview" >
                Preview
              </Button>
            </Grid>

          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;