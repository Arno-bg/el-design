import React, { ReactElement } from 'react';
import { Button } from "../../components/el-design"

const ButtonTest: React.FC = (): ReactElement => {
    return (
        <Button
            type="dashed"
        >
            312
            321
            <div>
                123
            </div>
            <span>321</span>
            444
        </Button>
    )
};

export default ButtonTest;
