import {merge} from "ramda";
import {IStateData, MyAction} from "../../../types/global";
import {
    SET_QUERY,
    SWITCH_OFFLINE_MODE,
    SET_PAGE_NUMBER,
    RESET_BOOKS_DATA,
    FETCH_BOOKS,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
} from "../actions";

import {Reducer} from "react";
//@ts-ignore
const rootReducer: Reducer<IStateData, MyAction> = (state, action) => {
    switch (action.type) {
        case SET_QUERY:
            return merge(state, {query: action.payload});
        case SWITCH_OFFLINE_MODE:
            return merge(state, {offlineMode: action.payload})
        case SET_PAGE_NUMBER:
            return merge(state, {pageNumber: action.payload})
        case RESET_BOOKS_DATA:
            return merge(state, {pageNumber: 1, booksData: action.payload})
        case FETCH_BOOKS:
            //@ts-ignore
            return merge(state, {booksData: merge(state.booksData, {
                    loading: true,
                    error: false,
                })
            })
        case FETCH_BOOKS_SUCCESS:
        case FETCH_BOOKS_FAILURE:
            return merge(state, { booksData: action.payload });
        default: return state;
    }
}

export {rootReducer}
