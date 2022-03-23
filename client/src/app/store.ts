import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { contactsReducer } from '../pages/Dashboard/Contacts/contactsSlice';
import { conversationsReducer } from '../pages/Dashboard/Conversations/ConversationsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    conversations: conversationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
