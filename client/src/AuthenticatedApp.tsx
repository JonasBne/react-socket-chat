import React, { useState } from 'react';
import TopNavBar from './pages/Dashboard/TopNavBar';
import Dashboard from './pages/Dashboard/Dashboard';

const CONVERSATIONS_KEY = 'Conversations';
const CONTACTS_KEY = 'Contacts';

interface AuthenticatedAppProps {
  id: string;
  onSignOut: () => void;
}

function AuthenticatedApp({ id, onSignOut }: AuthenticatedAppProps) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  const handleActiveKey = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      <TopNavBar
        activeKey={activeKey}
        conversationsKey={CONVERSATIONS_KEY}
        contactsKey={CONTACTS_KEY}
        onActiveKeyChange={handleActiveKey}
        onSignOut={onSignOut}
      />
      <Dashboard activeKey={activeKey} id={id} />
    </>
  );
}

export default AuthenticatedApp;
