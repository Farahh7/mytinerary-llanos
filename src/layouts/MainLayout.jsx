import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"


export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#ebebeb]">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}