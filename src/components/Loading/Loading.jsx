import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import colors from '../../utils/colors';
import Box from '@mui/material/Box';
import styles from './styles';

const Loading = () => (
  <Box
    sx={styles.box}
  >
    <CircularProgress
      sx={{ color: colors.red }}
      size={100}
    />
    <CircularProgress
      sx={{ color: colors.lime }}
      size={100}
    />
    <CircularProgress
      sx={{ color: colors.blue }}
      size={100}
    />
  </Box>
)

export default Loading;
