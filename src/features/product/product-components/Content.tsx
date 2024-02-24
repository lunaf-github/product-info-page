import { fetchContent } from '../productSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import Table from "./Table";
import Product from "./Product";
import { SalesData, rootState } from '../types';
import { ColumnDetails } from '../types';

const Content = () => {
    const dispatch = useDispatch<Dispatch<any>>();
    const fetchStatus = useSelector((state: rootState) => state.products.status);
    let salesData = useSelector((state: rootState) => state.products.items[0].sales);
    const errorMessage = useSelector((state: rootState) => state.products.error);
   
    const columns: ColumnDetails[] = [
        { label: 'WEEK ENDING', accessor: 'weekEnding', sortable: true },
        { label: 'RETAIL SALES', accessor: 'retailSales', sortable: true },
        { label: 'WHOLESALE SALES', accessor: 'wholesaleSales', sortable: true },
        { label: 'UNITS SOLD', accessor: 'unitsSold', sortable: true },
        { label: 'RETAILER MARGIN', accessor: 'retailerMargin', sortable: true },
    ];

    useEffect(() => {
        dispatch(fetchContent());
    }, [])

    return (
        <>
            <Product />
            <Chart />
            <Table columns={columns} data={salesData} fetchStatus={fetchStatus} errorMessage={errorMessage}/>
        </>
    );
}

export default Content;

