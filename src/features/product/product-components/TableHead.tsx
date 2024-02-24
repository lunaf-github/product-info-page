import React, { useState } from 'react';
import { ColumnDetails, HandleSortingFunction } from '../types';
import { SalesData } from '../types';

const TableHead = ({ columns, handleSorting }: { columns: ColumnDetails[], handleSorting: HandleSortingFunction}) => {

    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [sortField, setSortField] = useState<keyof SalesData>('weekEnding')

    function handleSortingChange(accessor: keyof SalesData) {
        const sortOrder = (accessor === sortField && order === 'asc')? 'desc' : 'asc';

        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    }

    
    const tableheaderNames = columns.map(({ label, accessor, sortable }) => {
        let sortIconClass: 'up' | 'down' | 'default' = 'default';

        if (sortable && sortField === accessor) {
            sortIconClass = (order === 'asc')? 'up' : 'down';
        } 

        return (
            <th 
                key={accessor} 
                onClick={sortable? () => handleSortingChange(accessor) : undefined}
                className={sortIconClass}
            >
                {label}
            </th>
        );
    })

    return (
        <thead>
            <tr>
                {tableheaderNames}
            </tr>
        </thead>
    );
}

export default TableHead;