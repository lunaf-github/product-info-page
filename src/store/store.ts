
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/product/productSlice';

const store = configureStore({
    reducer: {
        products: rootReducer
    }
});

export default store;