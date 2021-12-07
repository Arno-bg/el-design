import { IRoute } from "../typings";

import ElRoute from "./PageRoutes/ElRoute";
import TestRoute from "./PageRoutes/Tests";

const AllRoute: IRoute[] = [];

export default AllRoute.concat(
    ElRoute, 
    TestRoute
);