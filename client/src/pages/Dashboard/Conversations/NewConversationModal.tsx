import React, { FormEvent, useState } from 'react';
import { ModalHeader, ModalBody, Form, FormGroup, FormCheck, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectContacts } from '../Contacts/contactsSlice';
import { createConversation } from './ConversationsSlice';

interface FormElements extends HTMLFormControlsCollection {
  contactNameInput: string;
}

interface CreateConversationFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface NewConversationModalProps {
  onCloseModal: () => void;
}

export default function NewConversationModal({ onCloseModal }: NewConversationModalProps) {
  const dispatch = useAppDispatch();
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

  const handleFormSubmit = (evt: FormEvent<CreateConversationFormElement>) => {
    evt.preventDefault();

    if (selectedContactIds.length > 0 && contacts) {
      const selectedRecipients = contacts.filter((contact) => selectedContactIds.includes(contact.contactId));

      dispatch(
        createConversation({
          recipients: selectedRecipients,
        }),
      );
    }

    onCloseModal();
  };

  return (
    <>
      <ModalHeader closeButton>Create Conversation</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          {contacts &&
            contacts.map((contact) => (
              <FormGroup key={contact.contactId}>
                <FormCheck
                  name="contactNameInput"
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
