import { ProductState } from './types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
// I recieved a typescript error sayin that it couldn't find the type
// for the redux toolkit, I ran npm install and now the error disappeard. 
import { Product } from './types';
import mockFetch from '../../utils/mockFetch';



const initialState: ProductState = {
    status: 'succeeded',
    items: [{
        brand: '',
        details: [],
        id: '', 
        image: '',
        retailer: '',
        reviews: [],
        sales: [],
        subtitle: '',
        tags: [],
        title: ''
    }]
}


export const fetchContent = createAsyncThunk('product/loadContents', async () => {
    const productInfo: Product[] = await mockFetch('fakeAPI');
    return productInfo;
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productLoad(state: ProductState, action) {
            const products = action.payload;
            return state.items = products; 
            // RTK uses the immer library to change the state without mutating it. It detects change
            // to a "draft state" and produces a brand new immutable state based on the changes
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContent.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchContent.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchContent.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});


export const { productLoad } = productSlice.actions; // Export the action creators
export default productSlice.reducer; // export the reducer






