import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ srcImg, tags, onClose }) => {
  
    useEffect(() => {
    function handleKeyD(event) {
      if (event.code === 'Escape') {
        onClose();}}

    window.addEventListener('keydown', handleKeyD);

    return () => {
      window.removeEventListener('keydown', handleKeyD);};
    },[onClose]);

  return createPortal(
    <Backdrop>
      <ModalDiv className="modal">
        <img src={srcImg} alt={tags} />
      </ModalDiv>
    </Backdrop>,
    modalRoot
  );
};
