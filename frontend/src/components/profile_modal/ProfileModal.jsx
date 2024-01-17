import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function ProfileModal({ openModal }) {
  const modalRef = useRef();
  useEffect(() => {
    if (openModal) {
      modalRef.showModal();
    } else {
      modalRef.close();
    }

    return () => {
      modalRef.close();
    };
  }, [openModal]);
  return (
    <dialog style={{ height: "20rem", width: "40rem" }} ref={modalRef}>
      Hello From dialog
    </dialog>
  );
}
