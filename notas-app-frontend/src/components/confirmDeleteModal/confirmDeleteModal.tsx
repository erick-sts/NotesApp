import React from 'react';
import './confirmDeleteModal.css';
import { GoAlert } from "react-icons/go";

interface ConfirmDeleteModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className="confirm-modal show" onClick={onCancel}>

            <div className="confirm-modal-content" onClick={(e) => e.stopPropagation()}>
                <h2><GoAlert /></h2>
                <h3>Confirmar Exclusão</h3>

                <p>Tem certeza de que deseja excluir esta nota?</p>

                <div className="confirm-modal-actions">
                    <button className="confirm" onClick={onConfirm}>Confirmar</button>
                    <button className="cancel" onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
