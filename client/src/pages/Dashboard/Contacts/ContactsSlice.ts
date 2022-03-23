import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../../domain/Contact';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {
    createContact(state, action: PayloadAction<Contact>) {
      state.push(action.payload);
    },
  },
});

export const { createContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
