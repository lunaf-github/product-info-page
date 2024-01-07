import { ProductState } from '../../types/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mockFetch from '../../utils/mockFetch';


const initialState: ProductState = {
    status: 'idle',
    products: [{
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

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const products  = await mockFetch('/fakeApi/products');
//     return products
// });

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productLoad(state, action) {
            const products = action.payload;
            return state.products = products; // RTK allows mutable state changes
        }
    }
});


export const { productLoad } = productSlice.actions;

export default productSlice.reducer;




