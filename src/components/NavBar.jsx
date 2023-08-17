import React, { useState } from 'react';
import ButtonLog from "../components/Button";
import { Link as Anchor } from "react-router-dom";

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
            <Anchor to='#' className="text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5]" >Home</Anchor>
            <Anchor to='/cities' className="text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5]" >Cities</Anchor>
            <ButtonLog onClick={() => setShowMenu(!showMenu)} />
          </div>
        </div>
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col mt-4 space-y-4">
            <Anchor to="#" className="text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5]">Home</Anchor>
            <Anchor to='/cities' className="text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5]">Cities</Anchor>
            <ButtonLog onClick={() => setShowMenu(!showMenu)} />
          </nav>
        </div>
      </div>
    </header>
  );
}
