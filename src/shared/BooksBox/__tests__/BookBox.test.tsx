import React from "react";
import {act, cleanup, render} from "@testing-library/react";
import {AppProvider} from "../../../context";
import BooksBox from "../BooksBox";
import {booksMock} from "../../../utils/lists/fixtures";

describe('BooksBox',  () => {
    it('should renders BooksBox component with empty list', async () => {
        const {getByRole, getAllByRole, unmount, debug} = render(
            <AppProvider>
                <BooksBox />
            </AppProvider>)

        expect(getAllByRole('list').length).toEqual(1);
        expect(getByRole('list').childElementCount).toEqual(0);
        unmount()
        debug();
    });

    it('should renders BooksBox component with 10 and 20 ListItems in List, but lists offsetHeight must be equal', async () => {
        let listFromOnePage: HTMLElement;
        let listFromTwoPages: HTMLElement;
        await act(async () => {
            const initialState = {
                query: '',
                pageNumber: 1,
                offlineMode: true,
                booksData: {
                    loading: false,
                    error: false,
                    books: booksMock.slice(0, 10),
                    hasMore: true,
                    count: 30
                },
            }
            const {getByRole, findByRole, unmount, debug, container, rerender} = render(
                <AppProvider initialState={initialState}>
                    <BooksBox />
                </AppProvider>
            )

            expect(await findByRole('list')).toBeDefined()
            listFromOnePage = getByRole('list')
            expect(listFromOnePage.children.length).toEqual(10);
            cleanup()
            await act(async () => {
                const initialState = {
                    query: '',
                    pageNumber: 2,
                    offlineMode: true,
                    booksData: {
                        loading: false,
                        error: false,
                        books: booksMock.slice(0, 20),
                        hasMore: true,
                        count: 30
                    },
                }
                const {getByRole, findByRole, unmount, debug, container, rerender} = render(
                    <AppProvider initialState={initialState}>
                        <BooksBox/>
                    </AppProvider>);
                expect(await findByRole('list')).toBeDefined()
                listFromTwoPages = getByRole('list')
                expect(getByRole('list').children.length).toEqual(20);
                expect(listFromOnePage.offsetHeight).toEqual(listFromTwoPages.offsetHeight)
            })
            unmount()
            debug();
        })
    })
})
