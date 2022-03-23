import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  contactId: string;
  contactName: string;
}

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
