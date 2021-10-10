import React from 'react'
import useBookSearch from './hooks/useBookSearch'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import HomePage from './components/HomePage/HomePage';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

export default function App() {
  const {
    loading,
    error
  } = useBookSearch()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header />
      {error && <ErrorMessage />}
      <HomePage />
      {loading && <Loading/>}
    </ThemeProvider>
  )
};
