import React, { FormEvent } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel, FormText, ModalBody, ModalHeader } from 'react-bootstrap';
import { useAppDispatch } from '../../../app/hooks';
import { Contact } from '../../../domain/Contact';
import useLocalStorageState from '../../../hooks/useLocalStorageState';
import { createContact } from './ContactsSlice';

interface FormElements extends HTMLFormControlsCollection {
  idInput: HTMLInputElement;
  nameInput: HTMLInputElement;
}

interface NewContactFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface NewContactModalProps {
  onCloseModal: () => void;
}

export default function NewContactModal({ onCloseModal }: NewContactModalProps) {
  const [, setContact] = useLocalStorageState('contact', []);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<NewContactFormElement>) => {
    evt.preventDefault();

    dispatch(
      createContact({
        contactId: evt.currentTarget.elements.idInput.value,
        contactName: evt.currentTarget.elements.nameInput.value,
      }),
    );

    setContact((prevContacts: Contact[]) => [
      ...prevContacts,
      {
        contactId: evt.currentTarget.elements.idInput.value,
        contactName: evt.currentTarget.elements.nameInput.value,
      },
    ]);

    onCloseModal();
  };

  return (
    <>
      <ModalHeader closeButton>Create Contact</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="py-4">
            <FormLabel htmlFor="idInput">ID</FormLabel>
            <FormControl name="idInput" type="text" required />
            <FormText className="text-muted">Enter the unique ID of your contact person.</FormText>
          </FormGroup>
          <FormGroup className="py-4">
            <FormLabel htmlFor="nameInput">Name</FormLabel>
            <FormControl name="nameInput" type="text" required />
          </FormGroup>
          <Button type="submit" className="m-1">
            Create
          </Button>
          <Button type="button" variant="danger" className="m-1">
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </>
  );
}
