import React from "react";
import {act, render} from "@testing-library/react";
import {AppProvider} from "../../../context";
import Search from "../Search";
import userEvent from "@testing-library/user-event";

describe('Search',  () => {
    it('should renders Search component', async () => {
        const {debug, getByLabelText} = render(
            <AppProvider>
                <Search />
            </AppProvider>)
        expect(getByLabelText(/Type title of the book/i)).toBeInstanceOf(HTMLInputElement);
        debug();
    });

    it('should change value after onChange event', async () => {
        const {debug, getByLabelText} = render(
            <AppProvider>
                <Search />
            </AppProvider>)
        expect(getByLabelText(/Type title of the book/i)).toHaveProperty('value', '')
        await act(async () => {
            await userEvent.type(getByLabelText(/Type title of the book/i), 'r')
        })
        expect(getByLabelText(/Type title of the book/i)).toHaveProperty('value', 'r')
        debug();
    })
})
