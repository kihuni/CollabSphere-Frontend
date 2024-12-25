import React from 'react';

const ChatHeader = () => {
  return (
    <div className="chat-header p-4 border-b border-gray-300 flex justify-between items-center">
      <h2 className="text-lg font-bold"># General</h2>
      <div className="room-info flex items-center">
        <i className="fas fa-users mr-2"></i> 24
      </div>
    </div>
  );
};

export default ChatHeader;