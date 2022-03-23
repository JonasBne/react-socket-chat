import React from 'react';
import ContactsList from './Contacts/ContactsList';
import Messages from './Conversations/Messages';
import ConversationsList from './Conversations/ConversationsList';

interface DashboardProps {
  activeKey: string;
  id: string;
}

export default function Dashboard({ activeKey, id }: DashboardProps) {
  return (
    <div className="container-fluid h-100">
      <div className="d-flex h-100">
        <div className="d-flex w-100 m-2 justify-content-center">
          <div className="col-4">
            {activeKey === 'Conversations' ? <ConversationsList id={id} /> : <ContactsList id={id} />}
          </div>
          <div className="col-8">{activeKey === 'Conversations' ? <Messages /> : <div>Adress book</div>}</div>
        </div>
      </div>
    </div>
  );
}
