"use client";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  judge: null,
};

const judgeSlice = createSlice({
  name: "judge",
  initialState,
  reducers: {
    setJudge: (state, action) => {
      state.judge = action.payload;
    },
    clearJudge: (state) => {
      state.judge = null;
    },
  },
});

export const { setJudge, clearJudge } = judgeSlice.actions;

export default judgeSlice.reducer;
