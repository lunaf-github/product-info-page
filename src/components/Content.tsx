import React from "react";
import Header from "./Header";

const Content = () => {
    return (
        <main className="grid-container">
            <Header />
            <aside className="product-container">Side</aside>
            <section className="chart-container">Graph</section>
            <section className="table-container">Table</section>
        </main>
    );
}

export default Content;