export type Product = {
    brand: string;
    details: string[];
    id: string;
    image: string;
    retailer: string;
    reviews: Review[];
    sales: SalesData[];
    subtitle: string;
    tags: string[];
    title: string;
}

export type Review = {
    customer: string;
    review: string;
    score: number;
}

export type SalesData = {
    retailSales: number;
    retailerMargin: number;
    unitsSold: number;
    weekEnding: string;
    wholesaleSales: number;
}

export type rootState = {
    products: ProductState;
}

export interface ProductState {
    status: 'succeeded' | 'loading' | 'failed';
    error?: string | undefined;
    items: Product[];
}


export interface Action {
    type: string;
    payload?: any;
}

export type ColumnDetails = {
    label: string;
    accessor: keyof SalesData;
    sortable: boolean;
}

export type TableProps = { 
    data: SalesData[];
    columns: ColumnDetails[];
    fetchStatus: 'loading' | 'failed' | 'succeeded'; 
    errorMessage: string | undefined ;
}

export type HandleSortingFunction = (sortField: keyof SalesData, sortOrder: 'asc' | 'desc') => void