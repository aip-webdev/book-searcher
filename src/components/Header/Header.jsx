import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import styles from './styles';

const Header = () => (
  <AppBar
    sx={styles}
    position='relative'
  >
    <Toolbar>
      <Typography variant='h4' color='inherit' noWrap>
        Find a Book
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
