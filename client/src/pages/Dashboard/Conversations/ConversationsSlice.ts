import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewConversation } from '../../../domain/Conversation';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: [] as NewConversation[],
  reducers: {
    createConversation(state, action: PayloadAction<NewConversation>) {
      state.push(action.payload);
    },
  },
});

export const { createConversation } = conversationsSlice.actions;

export const conversationsReducer = conversationsSlice.reducer;
