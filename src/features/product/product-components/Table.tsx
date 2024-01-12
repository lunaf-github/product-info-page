
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../productSlice';
import { rootState } from '../types';
import { Dispatch } from '@reduxjs/toolkit';


const Table = () => {

    const dispatch = useDispatch<Dispatch<any>>();
    const fetchStatus = useSelector((state: rootState) => state.products.status);
    const productInfo = useSelector((state: rootState) => state.products.items[0]);
    const error = useSelector((state: rootState) => state.products.error);

    useEffect(() => {
        dispatch(fetchContent());
    }, [])


    const data = productInfo.sales;

    
    const ColumnNames = (
        <thead>
            <tr>
                <th scope="col">
                <div>
                    WEEK ENDING
                </div>
                </th>
                <th scope="col" >
                <div>
                    RETAIL SALES 
                </div>
                </th>
                <th scope="col" >
                <div>
                    WHOLESALE SALES 
                </div>
                </th>
                <th scope="col" >
                <div>
                    UNITS SOLD 
                </div>
                </th>
                <th scope="col" >
                <div>
                    RETAILER MARGIN 
                </div>
                </th>
            </tr>
        </thead>
    )

    const rows = data.map((row, i) => {
        return (
            <tr key={`row-${i}`}>
              <td>{row.weekEnding.toLocaleString()}</td>
              <td>{"$" + row.retailSales.toLocaleString()}</td>
              <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
              <td>{row.unitsSold.toLocaleString()}</td>
              <td>{"$" + row.retailerMargin.toLocaleString()}</td>
            </tr>
          );
    })

    return (
        <section className="table-container">
            <table id="table">
                {fetchStatus === 'succeeded' &&  ColumnNames}
                <h1>{fetchStatus === 'loading' && '...Loading'}</h1>
                <h1>{fetchStatus === 'failed' && 'Unable to fetch data: ' + error}</h1>
                <tbody>{rows}</tbody>
            </table>
        </section>    

    );
}

export default Table;