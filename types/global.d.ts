import {IBooksData} from "../src/hooks/useBookSearch";
import {
    FetchBooksAction, FetchBooksFailureAction, FetchBooksSuccessAction,
    ResetBooksDataAction,
    SetPageNumberAction,
    SetQueryAction,
    SwitchOfflineModeAction
} from "../src/context/actions";

export interface IStateData {
    query: string;
    pageNumber: number;
    offlineMode: boolean;
    booksData: IBooksData;
}

export type MyAction = SetQueryAction | SwitchOfflineModeAction | SetPageNumberAction | ResetBooksDataAction |
    FetchBooksAction | FetchBooksSuccessAction | FetchBooksFailureAction;

export type IBookResProps = {
    [x: string]: any[];
    title: any;
};
export type IBookProps = {
    title: string;
    author?: string;
}

export type IBooksData = {
    books: IBookProps [] | [],
    loading: boolean,
    hasMore: boolean,
    count: number,
    error: boolean
}