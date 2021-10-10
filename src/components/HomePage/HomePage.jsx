import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import styles from './styles';
import ListItem from '@mui/material/ListItem';
import BookCard from '../BookCard/BookCard';
import MoreResultsButton from '../MoreResultsButton/MoreResultsButton';
import Container from '@mui/material/Container';
import Search from '../Search/Search';
import {useDispatch, useSelector} from "react-redux";
import {setPageNumber, setQuery} from "../../store/actions";

const HomePage = () => {
  const { list, listItem, container, total } = styles;
  const dispatch = useDispatch();
  const pageNumber = useSelector(state => state.pageNumber);
  const offline = useSelector(state => state.offlineMode);
  const query = useSelector(state => state.query);

  const loading = useSelector(state => state.booksData.loading);

  const books = useSelector(state => state.booksData.books);
  const hasMore = useSelector(state => state.booksData.hasMore);
  const count = useSelector(state => state.booksData.count);

  const handleSearch = (e) => {
    dispatch(setQuery(e.target.value));
    dispatch(setPageNumber(1));
  }

  const handleClick = () => {
    dispatch(setPageNumber(pageNumber + 1));
  }

  return (
    <Container
      sx={container}
      maxWidth='lg'
    >
      {!offline && <Search query={query} handleSearch={handleSearch}/>}
      {count > 0 &&
      <Typography
        variant='h5'
        component='h5'
        sx={total}
      >
        Total books found: {count}
      </Typography>}
      <Box>
        <List sx={list}>
          {books.map((book, index) => {
            const { title, author } = book;

            return (
              <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                <BookCard author={author} title={title}/>
              </ListItem>
            )
          })}
        </List>
        {hasMore && !loading &&
        <MoreResultsButton
          onClickHandler={handleClick}
        />}
      </Box>
    </Container>
  )
}

export default HomePage;
