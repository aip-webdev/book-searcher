import React from "react";
import BookCard from "../BookCard";
import {render} from "@testing-library/react";

describe('BookCard', () => {
    it('should renders BookCard component', function () {
        const {debug, getByText} = render(<BookCard author='Alfred H. Lotring' title='Reason and nature' />);
        expect(getByText(/Reason and nature/i)).toBeInstanceOf(HTMLElement);
        expect(getByText(/Alfred H. Lotring/i)).toBeInstanceOf(HTMLElement);
        //debug();
    });
})
