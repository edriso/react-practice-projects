import logo from "../logo.svg";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { social, links } from "../data";

function Sidebar() {
  return (
    // .show-sidebar
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn">
          <AiOutlineCloseSquare />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
