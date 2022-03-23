import React, { FormEvent, useState } from 'react';
import { ModalHeader, ModalBody, Form, FormGroup, FormCheck, Button } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { selectContacts } from '../Contacts/contactsSlice';

interface NewConversationModalProps {
  onCloseModal: () => void;
}

export default function NewConversationModal({ onCloseModal }: NewConversationModalProps) {
  const contacts = useAppSelector((state) => selectContacts(state));

  const [selectedContactIds, setSelectedContactIds] = useState<string[]>([]);

  const handleCheckboxChange = (contactId: string) => {
    setSelectedContactIds((prevContactIds) => {
      if (prevContactIds.includes(contactId)) {
        return prevContactIds.filter((prevId) => prevId !== contactId);
      }
      return [...prevContactIds, contactId];
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onCloseModal();
  };

  console.log('contacts', selectedContactIds);

  return (
    <>
      <ModalHeader closeButton>Create Conversation</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          {contacts &&
            contacts.map((contact) => (
              <FormGroup key={contact.contactId}>
                <FormCheck
                  type="checkbox"
                  label={contact.contactName}
                  onChange={() => handleCheckboxChange(contact.contactId)}
                />
              </FormGroup>
            ))}
          {!contacts && (
            <div className="text-muted">
              Looks like you do not have contacts to start a conversation. Head over to &ldquo;Contacts&ldquo; to get
              started.
            </div>
          )}
          <Button className="mt-4" type="submit">
            {contacts ? 'Create' : 'Close'}
          </Button>
        </Form>
      </ModalBody>
    </>
  );
}
