// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import judgeSlice from './judgeSlice';

export const Store = configureStore({
    reducer: {
        judgeInfo: judgeSlice.reducer, 
    },
});
