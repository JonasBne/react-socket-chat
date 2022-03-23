import React from 'react';
import ConversationsList from './ConversationsList';
import Messages from './Messages';

interface ConversationsProps {
  id: string;
}

export default function Conversations({ id }: ConversationsProps) {
  return (
    <div className="container-fluid h-100">
      <div className="d-flex h-100">
        <div className="d-flex w-100 m-2 border border-secondary justify-content-center">
          <div className="col-4">
            <ConversationsList id={id} />
          </div>
          <div className="col-8">
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
}
