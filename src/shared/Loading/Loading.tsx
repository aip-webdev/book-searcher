import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './styles';

const Loading = () => (
    //@ts-ignore
  <Box sx={styles.box}>
    <CircularProgress
      sx={{ color: '#F9423A' }}
      size={100}
    />
    <CircularProgress
      sx={{ color: '#D0DF00' }}
      size={100}
    />
    <CircularProgress
      sx={{ color: '#00A7B5' }}
      size={100}
    />
  </Box>
)

export default Loading;
