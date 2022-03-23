import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';

const CONVERSATIONS_KEY = 'Conversations';
const CONTACTS_KEY = 'Contacts';

export default function TopNavBar() {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  const handleActiveKey = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> ⚛️ 👋 </Navbar.Brand>
        <Nav
          variant="pills"
          className="
         justify-content-end"
          activeKey={activeKey}
        >
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY} onClick={() => handleActiveKey(CONVERSATIONS_KEY)}>
              <Conversations />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY} onClick={() => handleActiveKey(CONTACTS_KEY)}>
              <Contacts />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Sign Out</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
