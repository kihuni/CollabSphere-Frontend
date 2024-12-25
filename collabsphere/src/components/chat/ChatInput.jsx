import React, { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Handle sending message
  };

  return (
    <div className="chat-input p-4 border-t border-gray-300 flex gap-2 bg-white">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 p-3 border border-gray-300 rounded-full text-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-accent-color text-white w-10 h-10 rounded-full flex items-center justify-center"
        onClick={handleSendMessage}
      >
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default ChatInput;