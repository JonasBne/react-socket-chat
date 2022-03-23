import React, { useState } from 'react';
import { ModalHeader, ModalBody, Form, FormGroup, FormCheck } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { selectContacts } from '../Contacts/ContactsSlice';

export default function NewConversationModal() {
  const contacts = useAppSelector((state) => selectContacts(state));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedContactIds, setSelectedContactIds] = useState<string[]>([]);

  const handleCheckboxChange = (contactId: string) => {
    if (contactId) {
      setSelectedContactIds((prevContactIds) => [...prevContactIds, contactId]);
    }
  };

  return (
    <>
      <ModalHeader closeButton>Create Conversation</ModalHeader>
      <ModalBody>
        <Form>
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
        </Form>
      </ModalBody>
    </>
  );
}
