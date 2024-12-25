// Sidebar.jsx
import React from 'react';
import RoomList from '../chat/RoomList';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r flex flex-col">
      <div className="p-4 border-b">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Room
        </button>
      </div>
      <RoomList />
    </div>
  );
};

export default Sidebar;