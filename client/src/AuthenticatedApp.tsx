import React, { useState } from 'react';
import TopNavBar from './pages/Dashboard/TopNavBar';
import Conversations from './pages/Dashboard/Conversations/Conversations';
import Contacts from './pages/Dashboard/Contacts/Contacts';

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
      {activeKey === CONVERSATIONS_KEY ? <Conversations id={id} /> : <Contacts id={id} />}
    </>
  );
}

export default AuthenticatedApp;
