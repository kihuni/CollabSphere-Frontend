// RoomList.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useChat } from '../../hooks/useChat';

const RoomList = () => {
  const { rooms } = useChat();
  const { roomId } = useParams();

  return (
    <div className="flex-1 overflow-y-auto">
      {rooms.map(room => (
        <Link
          key={room.id}
          to={`/chat/${room.id}`}
          className={`flex items-center px-4 py-3 hover:bg-gray-50 ${
            roomId === room.id ? 'bg-blue-50' : ''
          }`}
        >
          <div>
            <div className="font-medium">#{room.name}</div>
            <div className="text-sm text-gray-500">
              {room.memberCount} members
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomList;