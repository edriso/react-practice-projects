import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../AppContext";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav-center">
        <h3 className="logo">Stripe</h3>

        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>

        <div className="nav-links">
          <button className="nav-link">products</button>
          <button className="nav-link">solutions</button>
          <button className="nav-link">resources</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
