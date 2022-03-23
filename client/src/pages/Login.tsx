import React from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap';

export default function Login() {
  return (
    <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
      <Form className="w-100">
        <FormGroup controlId="login-form">
          <FormLabel>Chatroom ID</FormLabel>
          <FormControl type="text" required />
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
