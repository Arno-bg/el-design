import { FC, LazyExoticComponent, ReactElement } from "react";

export interface IRoute {
    id: string,
    path: string,
    component: LazyExoticComponent<() => ReactElement> | LazyExoticComponent<FC<{}>>
};