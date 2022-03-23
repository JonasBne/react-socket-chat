import React, { useState } from 'react';
import { Container, Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
import NewContactModal from './NewContactModal';
import { useAppSelector } from '../../../app/hooks';

interface ContactsListProps {
  id: string;
}

export default function ContactsList({ id }: ContactsListProps) {
  const contacts = useAppSelector((state) => state.contacts);

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
        <ListGroup variant="flush">
          {contacts.map(({ contactId, contactName }) => (
            <ListGroupItem key={contactId}>{contactName}</ListGroupItem>
          ))}
        </ListGroup>
        <div className="mt-auto p-2 border-top">
          Your ID: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0" type="button" onClick={handleOpenModal}>
          New Contact
        </Button>
      </Container>
      <Modal show={modalOpen} onHide={handleCloseModal}>
        <NewContactModal onCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}
