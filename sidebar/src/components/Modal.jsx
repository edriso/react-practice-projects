import { AiOutlineCloseSquare } from "react-icons/ai";

function Modal() {
  return (
    // .show-modal
    <section className={`modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>

        <button className="close-modal-btn">
          <AiOutlineCloseSquare />
        </button>
      </div>
    </section>
  );
}

export default Modal;
