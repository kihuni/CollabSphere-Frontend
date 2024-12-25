import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import { useAuth } from '../../hooks/useAuth';

const MainLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex flex-1 overflow-hidden">
        {isAuthenticated && <Sidebar />}
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;