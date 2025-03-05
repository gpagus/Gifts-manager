import { NavLink } from "react-router-dom";

function Navbar() {
    return (
      <header className="bg-pink-400 text-white p-4 text-center">
        <nav className="flex justify-center gap-4">
          {/* Link to the home page */}
          <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 pb-1" : ""}>
            Menú
          </NavLink>

          {/* Link to the recipients list page */}
          <NavLink to="/list" className={({ isActive }) => isActive ? "border-b-2 pb-1" : ""}>
            Lista de destinatarios
          </NavLink>

          {/* Link to the form page to add a new gift */}
          <NavLink to="/form" className={({ isActive }) => isActive ? "border-b-2 pb-1" : ""}>
            Añadir regalo
          </NavLink>
        </nav>
      </header>
    );
  }

export default Navbar;
