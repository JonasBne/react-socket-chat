import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../../domain/Contact';

const contactsInLocalStorage = () => {
  const valueInStorage = window.localStorage.getItem('react-socketio-chat-contacts');

  if (valueInStorage) {
    return JSON.parse(valueInStorage);
  }
  return [];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInLocalStorage,
  reducers: {
    createContact(state, action: PayloadAction<Contact>) {
      state.push(action.payload);
    },
  },
});

export const { createContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
