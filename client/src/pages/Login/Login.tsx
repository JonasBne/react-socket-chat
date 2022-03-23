import React, { ChangeEvent, FormEvent } from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap';

interface LoginProps {
  chatRoomId: string;
  onGenerateId: () => void;
  onIdChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Login({ chatRoomId, onGenerateId, onIdChange }: LoginProps) {
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onIdChange(evt);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const handleClick = () => {
    onGenerateId();
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
        <Button type="button" variant="light" className="m-1" onClick={handleClick}>
          Generate ID
        </Button>
      </Form>
    </Container>
  );
}
