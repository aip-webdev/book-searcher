import React from 'react';
import Button from '@mui/material/Button';
import styles from './styles';

const MoreResultsButton = ({ onClickHandler }) => (
  <Button
    onClick={onClickHandler}
    variant='contained'
    sx={styles}
  >
    Load more Books
  </Button>
)
export default MoreResultsButton;
