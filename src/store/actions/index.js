
export const SET_QUERY = 'SET_QUERY';
export const setQuery = (queryValue) => ({
    type: SET_QUERY,
    payload: queryValue
});

export const SWITCH_OFFLINE_MODE = 'SWITCH_OFFLINE_MODE';
export const switchOfflineMode = (isOffline) => ({
    type: SWITCH_OFFLINE_MODE,
    payload: isOffline
});

export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const setPageNumber = (number) => ({
    type: SET_PAGE_NUMBER,
    payload: number
});

export const RESET_BOOKS_DATA = 'RESET_BOOKS_DATA';
export const resetBooksData = () => ({
    type: RESET_BOOKS_DATA,
});

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const fetchBooks = () => ({
    type: FETCH_BOOKS,
});

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const fetchBooksSuccess = ([books, loading, hasMore, count, error]) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: {
        books:books,
        loading: loading,
        hasMore: hasMore,
        count: count,
        error: error
    }
});

export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const fetchBooksFailure = () => ({
    type: FETCH_BOOKS_FAILURE,
});
