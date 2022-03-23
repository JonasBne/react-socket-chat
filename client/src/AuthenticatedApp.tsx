import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import TopNavBar from './pages/Dashboard/TopNavBar';

interface AuthenticatedAppProps {
  chatRoomId: string;
  onSignOut: () => void;
}

function AuthenticatedApp({ chatRoomId, onSignOut }: AuthenticatedAppProps) {
  console.log(chatRoomId);
  return (
    <>
      <TopNavBar onSignOut={onSignOut} />
      <Dashboard />
    </>
  );
}

export default AuthenticatedApp;
