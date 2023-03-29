import { useGlobalContext } from "../AppContext";
import { sublinks } from "../data";

function NavLinks() {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        return (
          <button
            className="nav-link"
            key={link.pageId}
            onMouseEnter={() => setPageId(link.pageId)}
          >
            {link.page}
          </button>
        );
      })}
    </div>
  );
}

export default NavLinks;
