import React, { useState } from 'react';
import TopNavBar from './pages/Dashboard/TopNavBar';
import Conversations from './pages/Dashboard/Conversations';
import Contacts from './pages/Dashboard/Contacts';

const CONVERSATIONS_KEY = 'Conversations';
const CONTACTS_KEY = 'Contacts';

interface AuthenticatedAppProps {
  chatRoomId: string;
  onSignOut: () => void;
}

function AuthenticatedApp({ chatRoomId, onSignOut }: AuthenticatedAppProps) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  const handleActiveKey = (key: string) => {
    setActiveKey(key);
  };

  console.log(chatRoomId);
  return (
    <>
      <TopNavBar
        activeKey={activeKey}
        conversationsKey={CONVERSATIONS_KEY}
        contactsKey={CONTACTS_KEY}
        onActiveKeyChange={handleActiveKey}
        onSignOut={onSignOut}
      />
      {activeKey === CONVERSATIONS_KEY ? <Conversations /> : <Contacts />}
    </>
  );
}

export default AuthenticatedApp;
