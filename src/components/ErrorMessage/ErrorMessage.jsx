import Typography from '@mui/material/Typography';
import colors from '../../utils/colors';
import React from 'react';

const ErrorMessage = () => (
  <Typography
    variant='h3'
    noWrap
    sx={{color: colors.red, textAlign: 'center'}}
  >
    API is not available - please switch to 'Offline Mode'
  </Typography>
)

export default ErrorMessage;
