import React, {useRef} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import styles from './styles';
import ListItem from '@mui/material/ListItem';
import BookCard from '../BookCard/BookCard';
import Container from '@mui/material/Container';
import Search from '../Search/Search';
import {useAppStore} from "../../hooks/useAppStore";
import {setPageNumber} from "../../context/actions";

const HomePage = () => {
  const { list, listItem, container, total } = styles;
  const [{pageNumber, offlineMode, booksData}, dispatch] = useAppStore();
  const ref = useRef(null);

  function handleScroll(event) {
    const htmlEl = event.currentTarget.childNodes[1];
    if (booksData.hasMore &&
        !booksData.loading &&
        (htmlEl.scrollHeight - htmlEl.clientHeight - window.scrollY) <= 0
       ) {
      dispatch(setPageNumber(pageNumber + 1))
    }
  }
  document.addEventListener('scroll', handleScroll);

  return (
    <Container
      sx={container}
      maxWidth='lg'
    >
      {!offlineMode && <Search/>}
      {booksData.count > 0 &&
      <Typography
        variant='h5'
        component='h5'
        sx={total}
      >
        Total books found: {booksData.count}
      </Typography>}
      <Box>
        <List ref={ref} sx={list}>
          {booksData.books && booksData.books.map((book, index) => {
            const { title, author } = book;
            return (
              <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                <BookCard author={author} title={title}/>
              </ListItem>
            )
          })}
        </List>

      </Box>
    </Container>
  )
}

export default HomePage;
