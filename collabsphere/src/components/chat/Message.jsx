import React from 'react';

const Message = ({ type, user, time, text }) => {
  return (
    <div className={`message ${type === 'sent' ? 'bg-accent-color text-white ml-auto' : 'bg-bg-light'} mb-4 p-2 rounded-lg max-w-4/5`}>
      {user && <strong>{user}</strong>}
      <p>{text}</p>
      <small>{time}</small>
    </div>
  );
};

export default Message;