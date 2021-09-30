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

const HomePage = ({ query, count, handleSearch, books, hasMore, loading, handleClick }) => {
  const { list, listItem, container, total } = styles;

  return (
    <Container
      sx={container}
      maxWidth='lg'
    >
      <Search query={query} handleSearch={handleSearch} />
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
          {books.map((book) => {
            const { title, author } = book;

            return (
              <ListItem key={`${title}-${author}`} sx={listItem}>
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
