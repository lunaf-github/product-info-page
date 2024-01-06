import React from 'react';
import JSONData from  '../../data/data.json';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


const Chart = () => {

    const data = JSONData[0].sales

    return (
        <section className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <XAxis dataKey="weekEnding" type="category"/>
            <YAxis hide={true} />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="retailSales"
                stroke="#49B1F2"
                strokeWidth={5}
                dot={false}
            />
            <Line type="monotone" dataKey="wholesaleSales" strokeWidth={5} stroke="#9BA7BF" dot={false} />
            </LineChart>
            </ResponsiveContainer>    
        </section>
    );
}

export default Chart;