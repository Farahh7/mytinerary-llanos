import NavBar from "../components/NavBar";

export default function NavLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-grey flex flex-col">
      <NavBar />
      {/* contenido dinamico de la interfaz */}
      {children}
    </div>
  );
}