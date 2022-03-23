import { Contact } from './Contact';

interface Message {
  content: string;
}

export interface Conversation {
  recipients: Contact[];
  messages: Message[];
}

export interface NewConversation {
  recipients: Contact[];
}
