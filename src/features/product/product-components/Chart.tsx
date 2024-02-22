import React, { useEffect } from 'react';
import { fetchContent } from '../productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../types';
import { Dispatch } from '@reduxjs/toolkit';


import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


const Chart = () => {

    const dispatch = useDispatch<Dispatch<any>>()
    const fetchStatus = useSelector((state: rootState) => state.products.status);
    const productInfo = useSelector((state: rootState) => state.products.items[0]);
    const error = useSelector((state: rootState) => state.products.error);

    const data = productInfo.sales;

    useEffect(() => {
        if (fetchStatus === 'succeeded') {
            dispatch(fetchContent());
        }
    }, [])

    return (
        <>
            <section className="chart-container">
                <h2>{fetchStatus === 'loading' && '...Loading'}</h2>
                <h2>{fetchStatus === 'failed' && error} </h2>
                {fetchStatus === 'succeeded' &&
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} >
                        <XAxis dataKey="weekEnding" type="category" tickFormatter={getMonth} tickLine={false}/>
                        <YAxis hide={true}  />
                        <Tooltip />
                        <Line type="monotone" dataKey="retailSales" stroke="#49B1F2" strokeWidth={5} dot={false}/>
                        <Line type="monotone" dataKey="wholesaleSales" stroke="#9BA7BF" strokeWidth={5} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
                }
            </section>
        </>
    );

}

function getMonth(value: string, index: number): string {
    const month = new Date(value).getMonth()

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];

    return monthNames[month]
}

export default Chart;