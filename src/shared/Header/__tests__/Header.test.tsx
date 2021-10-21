import React from "react";

import {render, fireEvent} from "@testing-library/react";
import Header from "../Header";
import {AppProvider} from "../../../context";

describe('Header',  () => {
    it('should renders Header component', async () => {
        const {debug, getByText} = render(
            <AppProvider>
                <Header />
            </AppProvider>)
        debug();
        expect(getByText(/Find a Book/i)).toBeInstanceOf(HTMLHeadingElement);
    });

    it('should change Classname of span element(Checkbox) after click', () => {
        const {debug, getByRole} = render(
            <AppProvider>
                <Header />
            </AppProvider>)
        const uncheckedClassName = getByRole('modeChanger').className
        fireEvent.click((getByRole('modeChanger')))
        expect(getByRole('modeChanger').className !== uncheckedClassName).toBeTruthy()
        debug();
    })
})
