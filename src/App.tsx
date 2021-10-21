import {hot} from 'react-hot-loader/root';
import useBookSearch from './hooks/useBookSearch'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './shared/Header/Header';
import Loading from './shared/Loading/Loading';
import HomePage from './shared/HomePage/HomePage';
import ErrorMessage from './shared/ErrorMessage/ErrorMessage';
import React from 'react';
import {AppProvider} from "./context";

function AppComponent() {
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
}

export const App = hot(() =>
    <AppProvider>
        <AppComponent />
    </AppProvider>
);
