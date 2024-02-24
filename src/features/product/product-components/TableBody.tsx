import React from 'react';
import { SalesData, ColumnDetails } from '../types';

const TableBody = ({ tableData, columns }: { tableData: SalesData[], columns: ColumnDetails[] }) => {

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    return (
        <tbody>
            {tableData.map(data => {
                return (
                    <tr key={data.weekEnding}>
                        {columns.map(({ accessor }) => {
                            const tData = data[accessor] ? data[accessor] : '--';
                            if (typeof tData === 'number') return <td key={accessor}>{USDollar.format(tData)}</td>
                            return <td key={accessor}>{tData.toLocaleString()}</td>
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

export default TableBody;