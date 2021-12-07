import { lazy } from "react";
import { nanoid } from "nanoid";
import { IRoute } from "../../typings";

const App = lazy(() => import("../../App"));

const routes: IRoute[] = [
    {
        id: nanoid(),
        path: "/",
        component: App
    }
];

export default routes;