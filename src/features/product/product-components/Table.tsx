
import React from 'react';

import { TableProps } from '../types';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { useSortableTable } from '../../useSortableTable';


const Table = ({ data, columns, fetchStatus, errorMessage }: TableProps) => {

    const [tableData, handleSorting] = useSortableTable(data);
    
    return (
        <section className="table-container" >
            <h1>{fetchStatus === 'loading' && '...Loading'}</h1>
            <h1>{fetchStatus === 'failed' && 'Unable to fetch data: ' + errorMessage}</h1>
            {fetchStatus === 'succeeded' &&             
                <table className="table">
                    <TableHead columns={columns} handleSorting={handleSorting}/>
                    <TableBody columns={columns} tableData={tableData}/>
                </table>
            }
        </section>    
    );
}

export default Table;