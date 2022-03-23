import React, { FormEvent } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel, FormText, ModalBody, ModalHeader } from 'react-bootstrap';

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
  const handleSubmit = (evt: FormEvent<NewContactFormElement>) => {
    evt.preventDefault();
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
