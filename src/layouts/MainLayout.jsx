import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function MainLayout({ children }) {
  
  return (
    <div className="w-full min-h-screen bg-white flex flex-col xl:w-[90vw] xl:m-auto">
      <NavBar />
      
      {children}
      <Footer />
    </div>
  );
}