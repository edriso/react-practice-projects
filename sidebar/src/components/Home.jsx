import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../customHooks/useGlobalContext";

function Home() {
  const { showModal, setShowModal, showSidebar, setShowSidebar } =
    useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaBars />
      </button>

      <button className="btn" onClick={() => setShowModal(!showModal)}>
        show modal
      </button>
    </main>
  );
}

export default Home;
