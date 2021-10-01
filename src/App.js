import React, { useState } from 'react'
import useBookSearch from './hooks/useBookSearch'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import HomePage from './components/HomePage/HomePage';
import { checkForOfflineMode, setOfflineMode } from './utils/utils';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [offline, setOffline] = useState(checkForOfflineMode)

  const {
    books,
    hasMore,
    loading,
    count,
    error
  } = useBookSearch(query, pageNumber, offline)

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const handleClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1)
  }

  const handleChange = () => {
    setOfflineMode(!offline)
    setOffline(!offline)
    setQuery('')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header
        offline={offline}
        onChangeHandler={handleChange}
      />
      {error && <ErrorMessage />}
      <HomePage
        books={books}
        count={count}
        hasMore={hasMore}
        loading={loading}
        query={query}
        offline={offline}
        handleSearch={handleSearch}
        handleClick={handleClick}
      />
      {loading && <Loading/>}
    </ThemeProvider>
  )
};
