import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import NewContactModal from './NewContactModal';

interface ContactsListProps {
  id: string;
}

export default function ContactsList({ id }: ContactsListProps) {
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
        <div>Contacts</div>
        <div className="mt-auto p-2 border-top">
          Your ID: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0" type="button" onClick={handleOpenModal}>
          New Contact
        </Button>
      </Container>
      <Modal show={modalOpen} onHide={handleCloseModal}>
        <NewContactModal />
      </Modal>
    </>
  );
}
