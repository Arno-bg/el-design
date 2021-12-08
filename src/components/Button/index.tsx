import React, { ReactElement } from 'react';
import IconLoading from '../../icon/react-icon/IconLoading';
import { BaseButtonProps } from './interface';

import "./style/index.less";

const ButtonComponent: React.FC<BaseButtonProps> = (props: BaseButtonProps = {}): ReactElement => {
    const {
        children,
        icon,
        // loading
        // type
    } = props;

    const iconNode = true ? <IconLoading /> : icon;
    const InnerContent = (
        <>
            {iconNode}
            {children}
        </>
    );

    return (
        <button>
            { InnerContent }
        </button>
    )
};

export default ButtonComponent;