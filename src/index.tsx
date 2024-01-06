import React from "react";
import {createRoot} from 'react-dom/client';
import ThemeProvider from "./providers/theme/ThemeProvider";
import App from "./components/App";
import "./styles.css"


const domNode = document.getElementById('root');

if (domNode) {
    const root = createRoot(domNode);
    root.render(<App />);
}
