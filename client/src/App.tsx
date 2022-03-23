import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Login from './pages/Login/Login';

function App() {
  const [chatRoomId, setChatRoomId] = useState('');

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomId(evt.target.value);
  };

  const handleGenerateId = () => {
    setChatRoomId(uuidv4());
  };

  console.log('chatroomid', chatRoomId);

  return <Login chatRoomId={chatRoomId} onIdChange={handleInputChange} onGenerateId={handleGenerateId} />;
}

export default App;
