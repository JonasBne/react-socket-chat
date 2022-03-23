import React, { ChangeEvent, FormEvent } from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap';

interface LoginProps {
  chatRoomId: string;
  onIdChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Login({ chatRoomId, onIdChange }: LoginProps) {
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onIdChange(evt);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
      <Form className="w-100" onSubmit={handleFormSubmit}>
        <FormGroup controlId="login-form">
          <FormLabel>Chatroom ID</FormLabel>
          <FormControl type="text" required onChange={handleInputChange} value={chatRoomId} />
          <FormText className="text-muted">Choose your own ID or generate a random number.</FormText>
        </FormGroup>
        <Button type="submit" className="m-1">
          Login
        </Button>
        <Button type="button" variant="light" className="m-1">
          Generate ID
        </Button>
      </Form>
    </Container>
  );
}
