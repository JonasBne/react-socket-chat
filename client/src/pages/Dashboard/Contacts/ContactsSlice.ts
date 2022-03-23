import { createSlice } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {},
});

// eslint-disable-next-line import/prefer-default-export
export const contactsReducer = contactsSlice.reducer;
