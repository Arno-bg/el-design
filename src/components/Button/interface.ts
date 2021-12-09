import { HTMLProps, ReactNode } from "react";

export interface BaseButtonProps {
    children?: ReactNode;

    /**
     * @zh
     * 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
     * @defaultValue default
    */
    type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';

    /**
     * @zh 设置按钮的图标
    */
    icon?: ReactNode;

    /**
     * @zh 按钮是否是加载状态
    */
    loading?: boolean;
    
    /**
     * @zh 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
     * @defaultValue square
    */
    shape?: 'circle' | 'round' | 'square';
};

export type FinalButtonProps = {
    /**
     * @zh 按钮原生的 html type 类型
     * @en html button type
     * @defaultValue button
     */
    htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type AnchorButtonProps = {
    href: string;
    target?: string;
    anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>;