// useChat.js
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './useAuth';

export const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const newSocket = io('http://localhost:8000', {
      auth: {
        token: localStorage.getItem('accessToken')
      }
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket && roomId) {
      socket.emit('join_room', roomId);
      
      socket.on('message', (message) => {
        setMessages(prev => [...prev, message]);
      });

      return () => {
        socket.emit('leave_room', roomId);
        socket.off('message');
      };
    }
  }, [socket, roomId]);

  const sendMessage = (content) => {
    if (socket && roomId) {
      socket.emit('message', {
        roomId,
        content,
        sender: user.id
      });
    }
  };

  return {
    messages,
    sendMessage,
  };
};
