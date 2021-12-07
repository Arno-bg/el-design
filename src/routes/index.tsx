import React, { ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routeList from "./connectRoute";

const myRoute: React.FC = (): ReactElement => {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <BrowserRouter>
                <Switch>
                    {
                        routeList.map(route => {
                            return (
                                <Route 
                                    exact={true} 
                                    path={route.path} 
                                    component={route.component} 
                                    key={route.id} 
                                />
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default myRoute;