import { createSlice } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {
    contactAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { contactAdded } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
