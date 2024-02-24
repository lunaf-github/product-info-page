import { useState, useEffect } from 'react';
import { HandleSortingFunction, SalesData } from './product/types';

// Make sure to define the tuple elements
export const useSortableTable = (data: SalesData[]): [tableData: SalesData[], handleSorting: HandleSortingFunction] => {
    const [tableData, setTableData] = useState(data);

    // for Redux thunk state update, allows for tableData state update
    useEffect(() => {
        setTableData([...data])
    }, [data])

    const handleSorting = (sortField: keyof SalesData, sortOrder: 'asc' | 'desc'): void => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;          
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );  
            });
            setTableData(sorted);
        }
    }

    return [tableData, handleSorting]
}