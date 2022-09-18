import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    add: state => {
      state.value += 1;
    },
  },
});

export default counterSlice.reducer;
export const { add } = counterSlice.actions;
