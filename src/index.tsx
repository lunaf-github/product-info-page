import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./store/store";

import App from "./App";
import "./styles.css"


const domNode = document.getElementById('root');

if (domNode) {
    const root = createRoot(domNode);

    root.render(
        <Provider  store={store}>
            <App />
        </Provider>
    );
}
