import React, { useState } from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-[87px] px-10 bg-gray-200 flex justify-start items-center">
      <div className="mx-auto max-w-7xl flex justify-between items-center w-full">
        <div className="md:flex items-center space-x-8 h-full w-full flex-grow">
          <div className="flex items-center space-x-2">
            <img
              src="./src/assets/mt.jpg"
              alt="My Tinerary Logo"
              className="h-20"
            />
            <p className="font-sans font-bold text-2xl text-[#1c1c1c] leading-[42.56px]">My Tinerary</p>
          </div>
          <div className="flex-grow" />
          <div className="flex items-center space-x-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setShowMenu(!showMenu)}>
              <path d={showMenu ? 'M6 18L18 6M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Anchor to='/' className="text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5]" >Home</Anchor>
            <Anchor to='/cities' className="text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5]" >Cities</Anchor>
            <Anchor to='/signin' className="text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d]">🙍‍♂️Login</Anchor>
          </div>
        </div>
        <div className="md:hidden">
          <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${showMenu ? 'block' : 'hidden'}`} onClick={() => setShowMenu(false)}></div>
          <nav className={`fixed right-0 top-0 bg-white w-64 p-4 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <Anchor to="#" className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Home</Anchor>
            <Anchor to='/cities' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Cities</Anchor>
            <Anchor to='/signin' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2" onClick={() => setShowMenu(false)}> 🙍‍♂️Login</Anchor>
          </nav>
        </div>
      </div>
    </header>
  );
}
