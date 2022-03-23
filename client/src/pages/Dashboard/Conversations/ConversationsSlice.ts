import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Conversation } from '../../../domain/Conversation';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: [] as Conversation[],
  reducers: {
    createConversation(state, action: PayloadAction<Conversation>) {
      state.push(action.payload);
    },
  },
});

export const { createConversation } = conversationsSlice.actions;

export const conversationsReducer = conversationsSlice.reducer;
