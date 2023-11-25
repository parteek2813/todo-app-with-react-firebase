import React, { useRef } from "react";

function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef();

  // if target element is clicked setShowModal to false
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <div className="Modal" ref={modalRef} onClick={closeModal}>
        <div className="container">{children}</div>
      </div>
    )
  );
}

export default Modal;
