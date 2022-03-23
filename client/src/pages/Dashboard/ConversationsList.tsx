import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import NewConversationModal from './NewConversationModal';

interface ConversationsListProps {
  id: string;
}

export default function ConversationsList({ id }: ConversationsListProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container className="d-flex flex-column p-0" style={{ height: '90vh', borderRight: '1px solid gray' }}>
        <div>Conversations</div>
        <div className="mt-auto p-2 border-top">
          Your ID: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0" type="button" onClick={handleOpenModal}>
          New Conversation
        </Button>
      </Container>
      <Modal show={modalOpen} onHide={handleCloseModal}>
        <NewConversationModal />
      </Modal>
    </>
  );
}
