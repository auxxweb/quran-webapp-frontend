import { createSlice } from '@reduxjs/toolkit';

export const judgeSlice = createSlice({
    name: 'Judge',
    initialState: {
        judge: null,
    },
    reducers: {
        judgeDetails: (state, action) => {
            state.judge = action.payload; 
        },
    },
});

export const { judgeDetails } = judgeSlice.actions; 
export default judgeSlice; 
