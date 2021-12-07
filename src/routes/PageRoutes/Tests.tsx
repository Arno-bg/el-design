import { lazy } from "react";
import { nanoid } from "nanoid";
import { IRoute } from "../../typings";

const MyLoadsh = lazy(() => import("../../tests/MyLoadash"));
const Button = lazy(() => import("../../tests/ButtonTest"));


const routes: IRoute[] = [
    {
        id: nanoid(),
        path: "/tests/my_loadash",
        component: MyLoadsh
    },
    {
        id: nanoid(),
        path: "/tests/button",
        component: Button
    }
];

export default routes;