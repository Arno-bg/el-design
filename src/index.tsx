import React from 'react';
import ReactDOM from 'react-dom';
import ElRoute from "./routes/index";

import "./resize.css";

ReactDOM.render(
    <React.StrictMode>
        <ElRoute />
    </React.StrictMode>,
    document.getElementById('root')
);