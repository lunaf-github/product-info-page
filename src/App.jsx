import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import mockFetch from "./utils/mockFetch";



const App = () => {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        mockFetch('https://someapiurl.com/api/salesinfomock')
            .then(res => setData(res))
    }, [])

    return (
        <div className="grid-container">
            <Header />
            <Content />
        </div>
    );
}

export default App;