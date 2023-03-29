import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "../customHooks/useGlobalContext";

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <section className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>

        <button className="close-modal-btn" onClick={closeModal}>
          <AiOutlineCloseSquare />
        </button>
      </div>
    </section>
  );
}

export default Modal;
