import React from 'react';
import { Container } from 'react-bootstrap';

interface ConversationsListProps {
  id: string;
}

export default function ConversationsList({ id }: ConversationsListProps) {
  return (
    <Container className="d-flex flex-column" style={{ height: '90vh', borderRight: '1px solid gray' }}>
      <div>Conversations</div>
      <div className="mt-auto p-2 border-top">
        Your ID <span className="text-muted">{id}</span>
      </div>
    </Container>
  );
}
