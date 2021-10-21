import React, {ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import styles from './styles';
import {setPageNumber, setQuery} from "../../context/actions";
import {useAppStore} from "../../hooks/useAppStore";

const Search = () => {
  const [state, dispatch] = useAppStore();
  const handleSearch: (e:ChangeEvent) => void = (e) => {
    // @ts-ignore
    dispatch(setQuery(e.target?.value));
    dispatch(setPageNumber(1));
  }

  return (
      <TextField
          sx={styles}
          // @ts-ignore
          size='large'
          id='find-a-book'
          label='Type title of the book'
          variant='outlined'
          value={state.query}
          onChange={handleSearch}
      />
  );
}

export default Search;
