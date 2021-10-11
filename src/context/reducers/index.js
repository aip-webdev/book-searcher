import {merge} from "ramda";
import {
    SET_QUERY,
    SWITCH_OFFLINE_MODE,
    SET_PAGE_NUMBER,
    RESET_BOOKS_DATA, FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE,
} from "../actions";

export function rootReducer(state, action) {
    switch (action.type) {
        case SET_QUERY:
            return merge(state, {query: action.payload});
        case SWITCH_OFFLINE_MODE:
            return merge(state, {offlineMode: action.payload})
        case SET_PAGE_NUMBER:
            return merge(state, {pageNumber: action.payload})
        case RESET_BOOKS_DATA:
            return merge(state, {booksData: merge(state.booksData, {
                    books: [],
                    hasMore: false,
                    count: 0,
                })
            })
        case FETCH_BOOKS:
            return merge(state, {booksData: merge(state.booksData, {
                    loading: true,
                    error: false,
                })
            })
        case FETCH_BOOKS_SUCCESS:
            return merge(state, { booksData: action.payload });
        case FETCH_BOOKS_FAILURE:
            return merge(state, {booksData: merge(state.booksData, {
                    loading: false,
                    error: true,
                })
            })
    }
    return state
}
