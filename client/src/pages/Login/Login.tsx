import React, { FormEvent } from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap';

interface FormElements extends HTMLFormControlsCollection {
  personalIdInput: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface LoginProps {
  onGenerateId: () => void;
  onSubmit: (personalId: string) => void;
}

export default function Login({ onGenerateId, onSubmit }: LoginProps) {
  const handleClick = () => {
    onGenerateId();
  };

  const handleSubmit = (evt: FormEvent<LoginFormElement>) => {
    evt.preventDefault();
    onSubmit(evt.currentTarget.elements.personalIdInput.value);
  };

  return (
    <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
      <Form className="w-100" onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="personalIdInput">Personal ID</FormLabel>
          <FormControl name="personalIdInput" type="text" required />
          <FormText className="text-muted">Choose your own ID or generate a random number.</FormText>
        </FormGroup>
        <Button type="submit" className="m-1">
          Login
        </Button>
        <Button type="button" variant="light" className="m-1" onClick={handleClick}>
          Generate ID
        </Button>
      </Form>
    </Container>
  );
}
