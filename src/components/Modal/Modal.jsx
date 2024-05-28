import { useRef } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

export const MyModal = ({ children }) => {
  const modalRoot = useRef(document.getElementById("modal-root"));
  return createPortal(
    <div className={css.modal}>
      <div className={css.backdrop}></div>
      <div className={css.content}>{children}</div>
    </div>,
    modalRoot.current
  );
};
