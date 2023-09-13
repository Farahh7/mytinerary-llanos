
import { useState } from "react";
import Display from "./Display";
import Label from "./Label";
import { useSelector } from "react-redux";
import mt from '../assets/mt.jpg'

export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false);

  const option = [
    { to: "/", title: "Home" },
    { to: "/cities", title: "Cities" },
  ];
  const user = useSelector((store) => store.users.user);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="h-[87px] px-10 bg-gray-200 flex justify-start items-center mx-[50px]
    md:mx-[100px]
    lg:mx-[80px]
    xl:mx-[120px]
    2xl:mx-[200px]
    min-[1800px]:mx-[250px]
    min-[2000px]:mx-[300px]
    min-[2500px]:mx-[400px]">
      <div className="flex justify-between items-center md:hidden">
        <div className="flex flex-col items-start">
          {showMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer md:hidden"
              onClick={toggleMenu} // Usa toggleMenu para cambiar el estado
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {showMenu ? (
            <Display option={option} showMenu={showMenu} setShowMenu={setShowMenu} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer md:hidden"
              onClick={toggleMenu} // Usa toggleMenu para cambiar el estado
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        {!showMenu && user.mail && (
          <div className="flex justify-end items-center">
            <img
              src={user.photo}
              alt={user._id}
              className="w-10 h-10 rounded-full border-2 mr-2 border-indigo-700"
            />
            <span className="capitalize font-semibold text-center">
              {user.name}
            </span>
          </div>
        )}
      </div>
      <nav className="hidden md:w-full md:flex md:justify-between md:items-center">

        <div className="flex items-center space-x-2">
          <img
            src={mt}
            alt="My Tinerary Logo"
            className="h-20"
          />
          <p className="font-sans font-bold text-2xl text-[#1c1c1c] leading-[42.56px]">My Tinerary</p>
        </div>
        <div className="flex justify-end">
          <Label option={option} showMenu={showMenu} setShowMenu={setShowMenu} />


          {user.mail && (
            <div className="flex justify-end items-center">
              <img
                src={user.photo}
                alt={user._id}
                className="w-12 h-12 rounded-full border-2 mx-2 border-indigo-700
                        lg:ml-4"
              />
              <span className="capitalize font-semibold text-center">
                {user.name}
              </span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

/* 
import React, { useState } from 'react';
import { Link as Anchor } from 'react-router-dom';
import mt from '../assets/mt.jpg'
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const {signout} = user_actions;

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  let [show, setShow] = useState(false);
  const user = useSelector((store) => store.users.user);
  let dispatch = useDispatch();

  const handleSignOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Leave it!'
    }).then((result) => {
      if (result.isConfirmed) 
        dispatch(signout())
    })
  }
  

  return (
    <header className="h-[87px] px-10 bg-gray-200 flex justify-start items-center">
      <div className="mx-auto max-w-7xl flex justify-between items-center w-full">
        <div className="md:flex items-center space-x-8 h-full w-full flex-grow">
          <div className="flex items-center space-x-2">
            <img
              src= {mt}
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
            { Object.keys(user).length > 0? (
              <>
                <img className="photo-user" src={user.photo} alt="User" />
                <span className="btn-signout" onClick={handleSignOut}>Sign Out</span>
              </>
            ) : (
            <Anchor to='/auth/signin' className="text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d]">🙍‍♂️Login</Anchor>
            )}</div>
        </div>              
        <div className="md:hidden">
          <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${showMenu ? 'block' : 'hidden'}`} onClick={() => setShowMenu(false)}></div>
          <nav className={`fixed right-0 top-0 bg-white w-64 p-4 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <Anchor to="/" className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Home</Anchor>
            <Anchor to='/cities' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Cities</Anchor>
            <Anchor to='/auth/signin' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2" onClick={() => setShowMenu(false)}> 🙍‍♂️Login</Anchor>
          </nav>
        </div>
   </div>
  </header> )  
}




 */















/* import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import mt from '../assets/mt.jpg';
import { useSelector, useDispatch } from 'react-redux';
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";

const { signout } = user_actions;

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(store => store.users.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Leave it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza el cierre de sesión solo si el usuario está autenticado
        if (user) {
          dispatch(signout()); // Llama a dispatch para realizar la acción de signout
        }
      }
    });
  }
    

  return (
    <header className="h-[87px] px-10 bg-gray-200 flex justify-start items-center">
      <div className="mx-auto max-w-7xl flex justify-between items-center w-full">
        <div className="md:flex items-center space-x-8 h-full w-full flex-grow">
          <div className="flex items-center space-x-2">
            <img

              src={mt}
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
            {user ? (
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full border-2 mr-2 border-indigo-700" src={user.photo} alt={user._id} />
                <span className="capitalize font-semibold text-center">{user.name}</span>
                <span className="btn-signout" onClick={handleSignout}>Sign Out</span>
              </div>
            ) : (
              <Anchor to='/signin' className="text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d]">🙍‍♂️Login</Anchor>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${showMenu ? 'block' : 'hidden'}`} onClick={() => setShowMenu(false)}></div>
          <nav className={`fixed right-0 top-0 bg-white w-64 p-4 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <Anchor to="#" className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Home</Anchor>
            <Anchor to='/cities' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Cities</Anchor>
            {user ? (
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full border-2 mr-2 border-indigo-700" src={user.photo} alt={user._id} />
                <span className="capitalize font-semibold text-center">{user.name}</span>
                <span className="btn-signout" onClick={handleSignout}>Sign Out</span>
              </div>
            ) : (
              <Anchor to='/signin' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">🙍‍♂️Login</Anchor>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
} */



/* import React, { useState } from 'react';
import { Link as Anchor } from 'react-router-dom';
import mt from '../assets/mt.jpg'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const [showMenu, setShowMenu, show] = useState(false);
  const user = useSelector(store => store.users.user);
  return (
    <header className="h-[87px] px-10 bg-gray-200 flex justify-start items-center">
      <div className="mx-auto max-w-7xl flex justify-between items-center w-full">
        <div className="md:flex items-center space-x-8 h-full w-full flex-grow">
          <div className="flex items-center space-x-2">
            <img
              src= {mt}

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

            {user.mail ? (
              <div className="flex justify-end items-center">
                <img src={user.photo} alt={user._id} className="w-10 h-10 rounded-full border-2 mr-2 border-indigo-700" />
                <span className="capitalize font-semibold text-center">{user.name}</span>
                <button
                  className="text-lg font-semibold text-white bg-[#4f46e5] py-2 px-4 rounded-md hover:bg-[#3d388d]"
                  onClick={handleSignout}
                >
                  Logout
                </button>
              </div>
            ) : (
            <Anchor to='/signin' className="text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d]">🙍‍♂️Login</Anchor>
            )}</div>

        </div>
        <div className="md:hidden">
          <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${showMenu ? 'block' : 'hidden'}`} onClick={() => setShowMenu(false)}></div>
          <nav className={`fixed right-0 top-0 bg-white w-64 p-4 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <Anchor to="#" className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Home</Anchor>
            <Anchor to='/cities' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2">Cities</Anchor>

            {user.mail ? (
              <div>
                <Anchor to='#' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2" onClick={handleSignout}>Logout</Anchor>
              </div>
            ) : (
            <Anchor to='/signin' className="block py-2 px-4 text-lg font-semibold text-[#1c1c1c] hover:text-[#4f46e5] mb-2" onClick={() => setShowMenu(false)}> 🙍‍♂️Login</Anchor>
            )}</nav>

        </div>
      </div>
    </header>
  );
}

 */

