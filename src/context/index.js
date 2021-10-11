import React from "react";
import {rootReducer} from "./reducers";
import {checkForOfflineMode} from "../utils/utils";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initialState = {
    query: '',
    pageNumber: 1,
    offlineMode: checkForOfflineMode(),
    booksData: {
        loading: false,
        error: false,
        books: [],
        hasMore: false,
        count: 0
    },
}

function AppProvider({ children }) {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);
    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                { children }
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}

function useAppState() {
    return React.useContext(AppStateContext);
}

function useAppDispatch() {
    return React.useContext(AppDispatchContext);
}

export {AppProvider, useAppState, useAppDispatch}
