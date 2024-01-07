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


export interface ProductState {
    status: 'idle' | 'loading'
    products: Product[]
}


export interface Action {
    type: string
}