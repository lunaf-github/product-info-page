import React, { useState, useEffect } from "react";
import Header from "./features/product/product-components/Header";
import Content from "./features/product/product-components/Content";
import mockFetch from "./utils/mockFetch";
import server from "./utils/mockFetch";



const App = () => {


    useEffect(() => {
        // mockFetch('https://someapiurl.com/api/salesinfomock')
    }, [])

    return (
        <div className="grid-container">
            <Header />
            <Content />
        </div>
    );
}

export default App;