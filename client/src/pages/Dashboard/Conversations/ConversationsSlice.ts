import { createSlice } from '@reduxjs/toolkit';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: [],
  reducers: {},
});

// eslint-disable-next-line import/prefer-default-export
export const conversationsReducer = conversationsSlice.reducer;
