import React from 'react';
import Message from './Message';

const ChatMessages = () => {
  return (
    <div className="chat-messages flex-1 overflow-y-auto p-4">
      <Message type="received" user="John Doe" time="10:30 AM" text="Hey team! How's the new feature coming along?" />
      <Message type="sent" time="10:32 AM" text="Almost done with the implementation. Will push the changes soon!" />
    </div>
  );
};

export default ChatMessages;