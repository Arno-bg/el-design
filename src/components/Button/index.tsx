import React, { ReactElement } from 'react';

import { BaseButtonProps } from './interface';

import "./style/index.less";

const ButtonComponent: React.FC<BaseButtonProps> = (props: BaseButtonProps = {}): ReactElement => {
    const {
        children,
        // type
    } = props;

    return (
        <button>
            { children }
        </button>
    )
};

export default ButtonComponent;