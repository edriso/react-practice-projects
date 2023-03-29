import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "../customHooks/useGlobalContext";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();

  return (
    <section className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>

        <button
          className="close-modal-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <AiOutlineCloseSquare />
        </button>
      </div>
    </section>
  );
}

export default Modal;
