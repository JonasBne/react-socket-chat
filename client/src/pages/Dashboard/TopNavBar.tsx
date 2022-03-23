import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';

interface TopNavBarProps {
  activeKey: string;
  conversationsKey: string;
  contactsKey: string;
  onActiveKeyChange: (key: string) => void;
  onSignOut: () => void;
}

export default function TopNavBar({
  activeKey,
  conversationsKey,
  contactsKey,
  onActiveKeyChange,
  onSignOut,
}: TopNavBarProps) {
  const handleActiveKey = (key: string) => {
    onActiveKeyChange(key);
  };

  const handleSignOut = () => {
    onSignOut();
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
            <Nav.Link eventKey={conversationsKey} onClick={() => handleActiveKey(conversationsKey)}>
              <Conversations />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={contactsKey} onClick={() => handleActiveKey(contactsKey)}>
              <Contacts />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
