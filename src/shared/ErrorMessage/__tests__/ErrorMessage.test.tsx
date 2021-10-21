import React from "react";
import {render} from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe('ErrorMessage', () => {
    it('should renders ErrorMessage component', function () {
        const {debug, getByText} = render(<ErrorMessage />);
        expect(getByText(/API is not available/i)).toBeInstanceOf(HTMLHeadingElement);
        expect(getByText(/API is not available/i).hidden).toBeFalsy();
        //debug();
    });
})
