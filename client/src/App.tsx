import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Login from './pages/Login/Login';
import useLocalStorageState from './hooks/useLocalStorageState';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  const [chatRoomId, setChatRoomId] = useLocalStorageState('chatRoomId', '');

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomId(evt.target.value);
  };

  const handleGenerateId = () => {
    setChatRoomId(uuidv4());
  };

  return chatRoomId ? (
    <AuthenticatedApp chatRoomId={chatRoomId} />
  ) : (
    <Login chatRoomId={chatRoomId} onIdChange={handleInputChange} onGenerateId={handleGenerateId} />
  );
}

export default App;
