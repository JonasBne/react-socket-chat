import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import TopNavBar from './pages/Dashboard/TopNavBar';

interface AuthenticatedAppProps {
  chatRoomId: string;
}

function AuthenticatedApp({ chatRoomId }: AuthenticatedAppProps) {
  console.log(chatRoomId);
  return (
    <>
      <TopNavBar />
      <Dashboard />
    </>
  );
}

export default AuthenticatedApp;
