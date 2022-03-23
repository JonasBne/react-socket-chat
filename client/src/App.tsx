import React, { useState } from 'react';
import Login from './pages/Login/Login';

function App() {
  const [chatRoomId, setChatRoomId] = useState('');

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomId(evt.target.value);
  };

  console.log('chatroomid', chatRoomId);

  return <Login chatRoomId={chatRoomId} onIdChange={handleInputChange} />;
}

export default App;
