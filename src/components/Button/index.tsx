import React, { ReactElement, ReactNode, useContext } from 'react';
import IconLoading from '../../icon/react-icon/IconLoading';

import { ConfigContext } from '../ConfigProvider';
import { ButtonProps } from './interface';

import cs from "../../utils/methods/cs";

import "./style/index.less";

const processChildren = (children?: ReactNode) => {
    const childrenList: any[] = [];
    let isPrevChildPure = false;
    React.Children.forEach(children, child => {
        const isCurrentChildPure = typeof child === "string" || typeof child === "number";

        if (isCurrentChildPure && isPrevChildPure) {
            const lastIndex = childrenList.length - 1;
            const lastChild = childrenList[lastIndex];
            childrenList[lastIndex] = `${lastChild}${child}`;
        } else {
            childrenList.push(child);
        }

        isPrevChildPure = isCurrentChildPure;
    });

    return React.Children.map(childrenList, child => {
        return typeof child === "string" ? <span>{child}</span> : child;
    });
};

const defaultProps: ButtonProps = {
    htmlType: 'button',
    type: 'default',
    shape: 'square',
};

const ButtonComponent: React.FC<ButtonProps> = (props: ButtonProps = defaultProps): ReactElement => {
    const {
        children,
        icon,
        loading,
        htmlType,
        type,
        ...rest
    } = props;

    const {
        getPrefixCls,
        // size: ctxSize,
        // autoInsertSpaceInButton,
        // componentConfig,
      } = useContext(ConfigContext);

    const iconNode = loading ? <IconLoading /> : icon;
    const _type = type === "default" ? "secondary" : type;

    const prefixCls = getPrefixCls!('btn');
    const classNames = cs(
        prefixCls,
        `${prefixCls}-${_type}`
    );

    const InnerContent = (
        <>
            {iconNode}
            {processChildren(children)}
        </>
    );

    return (
        <button
            {...rest}
            type={htmlType}
            className={classNames}
        >
            { InnerContent }
        </button>
    )
};

export default ButtonComponent;