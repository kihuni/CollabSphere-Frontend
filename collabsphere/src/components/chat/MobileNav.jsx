import React from 'react';

const MobileNav = () => {
  return (
    <nav className="mobile-nav fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 h-bottom-nav-height z-1000 md:hidden">
      <div className="mobile-nav-menu flex justify-around items-center h-full">
        <a href="/" className="mobile-nav-item flex flex-col items-center text-text-color text-sm">
          <i className="fas fa-comments text-xl mb-1"></i>
          <span>Chats</span>
        </a>
        <a href="/" className="mobile-nav-item flex flex-col items-center text-text-color text-sm">
          <i className="fas fa-users text-xl mb-1"></i>
          <span>Rooms</span>
        </a>
        <a href="/" className="mobile-nav-item flex flex-col items-center text-text-color text-sm">
          <i className="fas fa-user text-xl mb-1"></i>
          <span>Profile</span>
        </a>
        <a href="/" className="mobile-nav-item flex flex-col items-center text-text-color text-sm">
          <i className="fas fa-cog text-xl mb-1"></i>
          <span>Settings</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;