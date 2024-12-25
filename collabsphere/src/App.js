import React from 'react';
import NavBar from './components/NavBar';
import MobileNav from './components/chat/MobileNav';
import ChatContainer from './components/chat/ChatContainer';

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <MobileNav />
      <div className="chat-container grid grid-cols-1 md:grid-cols-3 gap-4 h-full mt-header-height p-4">
        <div className="sidebar bg-white rounded-lg p-4 overflow-y-auto hidden md:block">
          <button className="create-room-btn w-full p-3 bg-accent-color text-white rounded-lg mb-4">
            <i className="fas fa-plus"></i> Create Room
          </button>
          <div className="list-item active flex items-center gap-2 p-3 rounded-lg mb-2 cursor-pointer">
            <i className="fas fa-hashtag"></i> General
          </div>
          <div className="list-item flex items-center gap-2 p-3 rounded-lg mb-2 cursor-pointer">
            <i className="fas fa-hashtag"></i> Development
          </div>
          <div className="list-item flex items-center gap-2 p-3 rounded-lg mb-2 cursor-pointer">
            <i className="fas fa-lock"></i> Private Room
          </div>
        </div>
        <ChatContainer />
        <div className="sidebar bg-white rounded-lg p-4 overflow-y-auto hidden md:block">
          <h3 className="text-lg font-bold mb-4">Online Users</h3>
          <div className="list-item flex items-center gap-2 p-3 rounded-lg mb-2 cursor-pointer">
            <span className="user-status w-2 h-2 rounded-full bg-success-color"></span> John Doe
          </div>
          <div className="list-item flex items-center gap-2 p-3 rounded-lg mb-2 cursor-pointer">
            <span className="user-status w-2 h-2 rounded-full bg-success-color"></span> Jane Smith
          </div>
          <div className="list-item flex items-center gap-2 p-3 rounded-lg mb-2 cursor-pointer">
            <span className="user-status w-2 h-2 rounded-full bg-gray-400"></span> Mike Johnson
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;