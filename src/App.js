import React, { useState } from 'react'
import useBookSearch from './hooks/useBookSearch'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    books,
    hasMore,
    loading,
    count
  } = useBookSearch(query, pageNumber)

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const handleClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomePage
        books={books}
        count={count}
        hasMore={hasMore}
        loading={loading}
        query={query}
        handleSearch={handleSearch}
        handleClick={handleClick}
      />
      {loading && <Loading />}
    </ThemeProvider>
  )
}
