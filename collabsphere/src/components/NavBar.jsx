import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-primary-color p-4 flex justify-between items-center h-header-height fixed top-0 left-0 right-0 z-1000">
      <i className="fas fa-bars text-white text-2xl cursor-pointer"></i>
      <div className="text-white text-xl font-bold">CollabSphere</div>
      <div className="hidden md:flex gap-4">
        <a href="/" className="text-white">Dashboard</a>
        <a href="/" className="text-white">Profile</a>
        <a href="/" className="text-white">Logout</a>
      </div>
    </nav>
  );
};

export default NavBar;