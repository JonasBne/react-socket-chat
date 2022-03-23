import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Login from './pages/Login/Login';
import useLocalStorageState from './hooks/useLocalStorageState';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  const [chatRoomId, setChatRoomId] = useLocalStorageState('chatRoomId', '');
  const [isAuthenticated, setIsAuthenticated] = useLocalStorageState('authentication', false);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomId(evt.target.value);
  };

  const handleLoginSubmit = () => {
    if (chatRoomId.trim().length > 0) {
      setIsAuthenticated(true);
    }
  };

  const handleSignOut = () => {
    setChatRoomId('');
    setIsAuthenticated(false);
  };

  const handleGenerateId = () => {
    setChatRoomId(uuidv4());
  };

  return isAuthenticated ? (
    <AuthenticatedApp chatRoomId={chatRoomId} onSignOut={handleSignOut} />
  ) : (
    <Login
      chatRoomId={chatRoomId}
      onIdChange={handleInputChange}
      onGenerateId={handleGenerateId}
      onSubmit={handleLoginSubmit}
    />
  );
}

export default App;
