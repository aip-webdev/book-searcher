import React from "react";
import {render} from "@testing-library/react";
import Loading from "../Loading";

describe('Loading', () => {

    it('should renders Loading component find 3 elements with role "propgressbar"', function () {
        const {debug, getAllByRole} = render(<Loading />);
        expect(getAllByRole('progressbar').length).toEqual(3);
        debug();
    });
})
