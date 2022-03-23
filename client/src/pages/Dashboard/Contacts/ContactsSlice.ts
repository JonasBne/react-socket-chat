import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../../app/store';
import { Contact } from '../../../domain/Contact';

const contactsInLocalStorage = (): Contact[] | null => {
  const valueInStorage = window.localStorage.getItem('react-socketio-chat-contacts');

  if (valueInStorage) {
    return JSON.parse(valueInStorage);
  }
  return null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInLocalStorage,
  reducers: {
    createContact(state, action: PayloadAction<Contact>) {
      if (state) {
        state.push(action.payload);
      }
    },
  },
});

export const { createContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state: RootState) => state.contacts;
