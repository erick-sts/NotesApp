import React, { useState, useEffect } from 'react';
import './editNoteModal.css';

interface EditNoteModalProps {
  note: { id: number; title: string; text: string };
  onSave: (id: number, title: string, text: string) => void;
  onClose: () => void;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({ note, onSave, onClose }) => {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, [note]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(note.id, title, text);
    onClose();
  };

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h3 className="note-title">Editar Nota</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Texto</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
};

export default EditNoteModal;
