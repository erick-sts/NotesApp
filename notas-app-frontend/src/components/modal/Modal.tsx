import React from 'react';
import './Modal.css';

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h3 className="note-title">{title}</h3>
        <div className="note-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;