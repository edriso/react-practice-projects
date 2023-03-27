import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linksHeightStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <header className="header">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />

          <button
            className={showLinks ? "nav-toggle collapse" : "nav-toggle"}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <nav
          className="links-container"
          style={linksHeightStyle}
          // ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
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
