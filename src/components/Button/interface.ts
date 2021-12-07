import { ReactNode } from "react";

export interface BaseButtonProps {
    children?: ReactNode;

    /**
     * @zh
     * 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
     * @en
     * A variety of button types are available: `primary`, `secondary`, `dashed`,
     * `text`, `linear` and `default` which is the secondary.
     * @defaultValue default
    */
    type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
};