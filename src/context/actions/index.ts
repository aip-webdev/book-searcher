import {IBookProps, IBooksData} from "../../../types/global";


export const SET_QUERY = 'SET_QUERY';
export interface SetQueryAction {
    type: typeof SET_QUERY;
    payload: string;
}

export function setQuery(queryValue: string): SetQueryAction {
    return {
        type: SET_QUERY,
        payload: queryValue
    }
}

export const SWITCH_OFFLINE_MODE = 'SWITCH_OFFLINE_MODE';
export interface SwitchOfflineModeAction {
    type: typeof SWITCH_OFFLINE_MODE;
    payload: boolean;
}

export function switchOfflineMode(isOffline: boolean): SwitchOfflineModeAction {
    return {
        type: SWITCH_OFFLINE_MODE,
        payload: isOffline
    }
}

export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export interface SetPageNumberAction {
    type: typeof SET_PAGE_NUMBER;
    payload: number;
}

export function setPageNumber(number: number): SetPageNumberAction {
    return {
        type: SET_PAGE_NUMBER,
        payload: number
    }
}

export const RESET_BOOKS_DATA = 'RESET_BOOKS_DATA';

export interface ResetBooksDataAction {
    type: typeof RESET_BOOKS_DATA,
    payload: IBooksData
}

export function resetBooksData(): ResetBooksDataAction {
    return {
        type: RESET_BOOKS_DATA,
        payload: {
            books: [],
            loading: false,
            hasMore: false,
            count: 0,
            error: false
        }
    }
}

export const FETCH_BOOKS = 'FETCH_BOOKS';

export interface FetchBooksAction {
    type: typeof FETCH_BOOKS,
    payload: boolean
}

export function fetchBooks(): FetchBooksAction {
    return {
        type: FETCH_BOOKS,
        payload: true
    }
}

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

export interface FetchBooksSuccessAction {
    type: typeof FETCH_BOOKS_SUCCESS,
    payload: IBooksData
}

interface IFetchBookSuccessProps {
    books: IBookProps[];
    hasMore: boolean;
    count: number;
}

export function fetchBooksSuccess({books, hasMore, count} : IFetchBookSuccessProps): FetchBooksSuccessAction {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: {
            books:books,
            loading: false,
            hasMore: hasMore,
            count: count,
            error: false
        }
    }
}

export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export interface FetchBooksFailureAction {
    type: typeof FETCH_BOOKS_FAILURE,
    payload: IBooksData
}

export function fetchBooksFailure(): FetchBooksFailureAction {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: {
            books: [],
            hasMore: false,
            count: 0,
            loading: false,
            error: true,
        }
    }
}
