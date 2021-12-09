import { createContext } from "react";
import { ConfigProviderProps } from "./interface";

const defaultProps: ConfigProviderProps = {
    prefixCls: 'el',
    size: 'default',
};

export const ConfigContext = createContext<ConfigProviderProps>({
    getPrefixCls: (componentName: string, customPrefix?: string) =>
        `${customPrefix || 'el'}-${componentName}`,
    ...defaultProps,
});