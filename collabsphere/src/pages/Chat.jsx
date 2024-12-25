// Chat.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useChat } from '../hooks/useChat';
import { ChatInput } from '../components/chat/ChatInput';
import ChatMessages from '../components/chat/ChatMessages';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';
import ChatHeader from '../components/chat/ChatHeader';

const Chat = () => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Fetch room details
    const fetchRoom = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/rooms/${roomId}/`);
        const data = await response.json();
        setRoom(data);
      } catch (error) {
        console.error('Error fetching room:', error);
      }
    };

    fetchRoom();
  }, [roomId]);

  if (!room) {
    return (
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader room={room} />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default Chat;