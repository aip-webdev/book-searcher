import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './styles';
import Container from '@mui/material/Container';
import Search from '../Search/Search';
import {useAppStore} from "../../hooks/useAppStore";
import BooksBox from "../BooksBox/BooksBox";

const HomePage = () => {
  const [{offlineMode, booksData}] = useAppStore();

    return (
    // @ts-ignore
    <Container sx={styles.container} maxWidth='lg'>
      {!offlineMode && <Search/>}
      {booksData.count > 0 &&
        <Typography variant='h5' component='h5' sx={styles.total} >
          Total books found: {booksData.count}
        </Typography>
      }
      <BooksBox />
    </Container>
  )
}

export default HomePage;
