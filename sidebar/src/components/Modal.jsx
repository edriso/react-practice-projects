import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "../customHooks/useGlobalContext";

function Modal() {
  const { showModal, setShowModal } = useGlobalContext();

  return (
    <section className={`modal-overlay ${showModal && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>

        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
          <AiOutlineCloseSquare />
        </button>
      </div>
    </section>
  );
}

export default Modal;
