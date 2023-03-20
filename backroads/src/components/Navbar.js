import { pageLinks, socialLinks } from "../data";
import logo from "../assets/images/logo.svg";

function Navbar() {
  const toggleNav = () => {
    const links = document.getElementById("nav-links");
    links.classList.toggle("show-links");
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleNav}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((elm) => {
            return (
              <li key={elm}>
                <a href={"#" + elm} className="nav-link">
                  {elm}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link, i) => {
            return (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
