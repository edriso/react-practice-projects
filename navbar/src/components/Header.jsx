import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="header">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />

          <button
            className={showNav ? "nav-toggle collapse" : "nav-toggle"}
            onClick={() => setShowNav(!showNav)}
          >
            <FaBars />
          </button>
        </div>

        {showNav && (
          <nav className="navbar">
            <ul className="links-container">
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        {/* <ul className="social">
            {social.map((elm) => {
              return (
                <li key={elm.id}>
                  <a href={elm.url} target="_blank" rel="noopener noreferrer">
                    <i>{elm.icon}</i>
                  </a>
                </li>
              );
            })}
          </ul> */}
      </div>
    </header>
  );
};
export default Header;
