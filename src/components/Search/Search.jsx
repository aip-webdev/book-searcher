import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './styles';

const Search = ({ query, handleSearch }) => (
  <TextField
    sx={styles}
    size='large'
    id='find-a-book'
    label='Type title of the book'
    variant='outlined'
    value={query}
    onChange={handleSearch}
  />
);

export default Search;
