import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Login from './pages/Login/Login';
import useLocalStorageState from './hooks/useLocalStorageState';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  const [id, setId] = useLocalStorageState('id', '');
  const [isAuthenticated, setIsAuthenticated] = useLocalStorageState('authentication', false);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setId(evt.target.value);
  };

  const handleLoginSubmit = () => {
    if (id.trim().length > 0) {
      setIsAuthenticated(true);
    }
  };

  const handleSignOut = () => {
    setId('');
    setIsAuthenticated(false);
  };

  const handleGenerateId = () => {
    setId(uuidv4());
  };

  return isAuthenticated ? (
    <AuthenticatedApp id={id} onSignOut={handleSignOut} />
  ) : (
    <Login
      chatRoomId={id}
      onIdChange={handleInputChange}
      onGenerateId={handleGenerateId}
      onSubmit={handleLoginSubmit}
    />
  );
}

export default App;
