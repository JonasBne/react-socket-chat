import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ConversationsList from './ConversationsList';
import Messages from './Messages';

export default function Conversations() {
  return (
    <Container style={{ height: '90vh' }} className="mt-2 border border-warning">
      <Row>
        <Col xs={5} style={{ height: '90vh' }} className="border border-secondary overflow-auto">
          <ConversationsList />
        </Col>
        <Col xs={7} style={{ height: '90vh' }} className="border border-primary overflow-auto">
          <Messages />
        </Col>
      </Row>
    </Container>
  );
}
