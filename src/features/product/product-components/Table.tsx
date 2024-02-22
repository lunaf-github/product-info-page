
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../productSlice';
import { SalesData, rootState } from '../types';
import { Dispatch } from '@reduxjs/toolkit';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { ColumnDetails } from '../types';

const Table = () => {

    const dispatch = useDispatch<Dispatch<any>>();
    const fetchStatus = useSelector((state: rootState) => state.products.status);
    const tableData = useSelector((state: rootState) => state.products.items[0].sales);
    const error = useSelector((state: rootState) => state.products.error);

    const [isAsc, setAsc] = useState<boolean>(true);
    const [sortedCol, setSortedCol] = useState<keyof SalesData>('weekEnding')

    const columns: ColumnDetails[] = [
        { label: 'WEEK ENDING', accessor: 'weekEnding'},
        { label: 'RETAIL SALES', accessor: 'retailSales'},
        { label: 'WHOLESALE SALES', accessor: 'wholesaleSales'},
        { label: 'UNITS SOLD', accessor: 'unitsSold'},
        { label: 'RETAILER MARGIN', accessor: 'retailerMargin'},
    ];

    
    useEffect(() => {
        dispatch(fetchContent());
    }, [])
    
    // let data = tableData
    // console.log('tabledata: ' , tableData)


    // function handleSort(colName: keyof SalesData) {
        
    //     tableData.sort((a: SalesData, b: SalesData): number => {
    //         const valueA: string | number = a[sortedCol];
    //         const valueB: string | number = b[sortedCol];
    //         let comparatorValue = 0;
             
    //         if (typeof valueA === 'string' && typeof valueB === 'string') {
    //             if (isAsc) {
    //                 comparatorValue =  valueA.localeCompare(valueB);
    //             } else {
    //                 comparatorValue = valueB.localeCompare(valueA);
    //             }
    //         } else if(typeof valueA === 'number' && typeof valueB === 'number') {
    //             if (isAsc) {'['
    //                 comparatorValue = valueA - valueB;
    //             } else {
    //                 comparatorValue = valueB - valueA;
    //             }
    //         } 
    
    //         return comparatorValue;
    //     })

    //     setAsc(prevState => {
    //         if (colName === sortedCol) {
    //             return !prevState;
    //         } else {
    //             return prevState;
    //         }
    //     })
    //     setSortedCol(colName);
        
    // }   
    
    // const ColumnNames = (
    //     <thead>
    //         <tr>
    //             <th scope="col" onClick={() => handleSort('weekEnding')} >
    //                 WEEK ENDING
    //             </th>
    //             <th scope="col" onClick={() => handleSort('retailSales')} >
    //                 RETAIL SALES 
    //             </th>
    //             <th scope="col" onClick={() => handleSort('wholesaleSales')} >
    //                 WHOLESALE SALES 
    //             </th>
    //             <th scope="col" onClick={() => handleSort('unitsSold')} >
    //                 UNITS SOLD 
    //             </th>
    //             <th scope="col" onClick={() => handleSort('retailerMargin')} >
    //                 RETAILER MARGIN 
    //             </th>
    //         </tr>
    //     </thead>
    // )

    // const rows = tableData.map((row, i) => {
    //     return (
    //         <tr key={`row-${i}`}>
    //           <td>{row.weekEnding.toLocaleString()}</td>
    //           <td>{"$" + row.retailSales.toLocaleString()}</td>
    //           <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
    //           <td>{row.unitsSold.toLocaleString()}</td>
    //           <td>{"$" + row.retailerMargin.toLocaleString()}</td>
    //         </tr>
    //       );
    // })

    return (
        <section className="table-container" >
            <h1>{fetchStatus === 'loading' && '...Loading'}</h1>
            <h1>{fetchStatus === 'failed' && 'Unable to fetch data: ' + error}</h1>
            {fetchStatus === 'succeeded' &&             
                <table id="table">
                    <TableHead columns={columns}/>
                    <TableBody columns={columns} tableData={tableData}/>
                    {/* {fetchStatus === 'succeeded' &&  ColumnNames}
                    <tbody>{rows}</tbody> */}
                </table>
            }
        </section>    
    );
}

export default Table;