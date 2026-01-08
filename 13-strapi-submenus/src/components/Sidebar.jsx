import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../AppContext";
import { sublinks } from "../data";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            return (
              <article key={item.pageId}>
                <h4>{item.page}</h4>
                <div className="sidebar-sublinks">
                  {item.links.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
