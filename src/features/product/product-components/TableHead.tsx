import React from 'react';
import { ColumnDetails } from '../types';

const TableHead = ({ columns }: { columns: ColumnDetails[]}) => {
    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor }) => {
                    return <th key={accessor}>{label}</th>
                })}
            </tr>
        </thead>
    );
}

export default TableHead;