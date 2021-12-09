export interface ConfigProviderProps {
    /**
     * @zh 全局组件类名前缀
     * @defaultValue el
    */
    prefixCls?: string;

    size?: 'mini' | 'small' | 'default' | 'large';
    getPrefixCls?: (componentName: string, customPrefix?: string) => string;
};