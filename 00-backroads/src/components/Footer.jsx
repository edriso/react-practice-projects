import { pageLinks, socialLinks } from "../data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((elm) => {
          return (
            <li key={elm}>
              <a href={"#" + elm} className="footer-link">
                {elm}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link, i) => {
          return (
            <li key={i}>
              <a
                href={link.href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
