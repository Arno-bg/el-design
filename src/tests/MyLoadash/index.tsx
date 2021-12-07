import React, { ReactElement } from "react";
import * as Loadash from "../../utils/index";

const Test: React.FC = (): ReactElement => {
    const l = Loadash.flatten([1,[2,3, [4, 5]], [6,7],[8, [9, [10]]]]);
    console.log(l);

    return (
        <div>
            MyLoadsh Test
        </div>
    )
};

export default Test;