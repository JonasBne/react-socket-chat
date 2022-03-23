import React from 'react';
import { ModalHeader, ModalBody, Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap';

export default function NewConversationModal() {
  return (
    <>
      <ModalHeader closeButton>Create Conversation</ModalHeader>
      <ModalBody>
        <Form>
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
