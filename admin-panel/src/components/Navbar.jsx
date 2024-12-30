import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-primary">
      <img className="w-24 h-auto" src="/logo.png" alt="Logo" />
      <img className="w-10 h-10 rounded-full border-2 border-white" src="/profile.png" alt="Profile" />
    </div>
  );
}

export default Navbar;
