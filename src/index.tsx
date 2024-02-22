import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./store/store";

import App from "./App";
import "./styles.css"


const domNode = document.getElementById('root');


const root = createRoot(domNode!);

root.render(
    <React.StrictMode>
        <Provider  store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

