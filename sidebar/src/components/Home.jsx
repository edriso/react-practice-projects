import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../customHooks/useGlobalContext";

function Home() {
  const { isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen } =
    useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>

      <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
        show modal
      </button>
    </main>
  );
}

export default Home;
