import NavBar from "../components/NavBar";

export default function NavLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar user={user} />
      {/* contenido dinamico de la interfaz */}
      {children}
    </div>
  );
}