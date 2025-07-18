import React from 'react';
import TopBar from '../Layout/TopBar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
      {/***Top Bar */}
      <TopBar />
      {/****Nav Bar */}
      <Navbar />
      {/****Card Draver */}
    </header>
  );
};

export default Header;
