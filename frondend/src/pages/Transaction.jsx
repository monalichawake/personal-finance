import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    list: [],
  },
  reducers: {
    setTransactions: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
