import React, { ReactElement } from "react";
import * as Loadash from "../../utils/index";

const Test: React.FC = (): ReactElement => {
    const l = Loadash.flatten([1,[2,3, [4, 5]], [6,7],[8, [9, [10]]]]);
    const debounceTest = Loadash.debounce(e => {
        console.log(e)
    }, 800);
    return (
        <div>
            MyLoadsh Tests
            <br />
            <input 
                type="text"
                onChange={debounceTest}
            ></input>
        </div>
    )
};

export default Test;