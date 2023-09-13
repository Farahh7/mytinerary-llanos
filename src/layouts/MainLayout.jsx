import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"

import { useSelector } from 'react-redux';


export default function MainLayout() {
  
  return (

    <div className="w-full flex flex-col min-h-screen"> 
      <NavBar />
      <div className="flex-grow"> 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}







