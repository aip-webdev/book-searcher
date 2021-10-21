import React from "react";
import { rootReducer} from "./reducers";
import { MyAction, IStateData } from "../../types/global";
import {getModeFromStorage} from "../utils/getModeFromStorage";

// @ts-ignore
let AppStateContext = React.createContext();
// @ts-ignore
const AppDispatchContext = React.createContext();

function AppProvider({ children, initialState }: {children: React.ReactNode, initialState?: IStateData}) {


    const initState: IStateData = {
        query: '',
        pageNumber: 1,
        offlineMode: getModeFromStorage(),
        booksData: {
            loading: false,
            error: false,
            books: [],
            hasMore: false,
            count: 0
        },
    }
    const [state, dispatch] = React.useReducer(rootReducer, initialState ? initialState : initState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                { children }
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}

function useAppState(): IStateData {
    return React.useContext(AppStateContext) as IStateData;
}

function useAppDispatch(): React.Dispatch<MyAction>{
    return React.useContext(AppDispatchContext) as React.Dispatch<MyAction>
}

export {AppProvider, useAppState, useAppDispatch}
