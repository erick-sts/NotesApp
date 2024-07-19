import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './NoteList.css';
import Modal from '../modal/Modal';
import AddNoteModal from '../addNoteModal/addNoteModal';
import ConfirmDeleteModal from '../confirmDeleteModal/confirmDeleteModal';
import EditNoteModal from '../editNoteModal/editNoteModal';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

interface Note {
  id: number;
  title: string;
  text: string;
}

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [expandedNoteId, setExpandedNoteId] = useState<number | null>(null);
  const [showAddNoteModal, setShowAddNoteModal] = useState<boolean>(false);
  const [showEditNoteModal, setShowEditNoteModal] = useState<boolean>(false);
  const [noteToDelete, setNoteToDelete] = useState<number | null>(null);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get('/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Erro ao buscar notas:', error);
      }
    };

    fetchNotes();
  }, []);

  const toggleNote = (noteId: number) => {
    setExpandedNoteId(expandedNoteId === noteId ? null : noteId);
  };

  const closeModal = () => {
    setExpandedNoteId(null);
  };

  const handleAddNote = () => {
    setShowAddNoteModal(true);
  };

  const handleEditNote = (noteId: number) => {
    const note = notes.find((note) => note.id === noteId);
    if (note) {
      setNoteToEdit(note);
      setShowEditNoteModal(true);
    }
  };

  const handleDeleteNote = (noteId: number) => {
    setNoteToDelete(noteId);
  };

  const confirmDeleteNote = async () => {
    if (noteToDelete !== null) {
      try {
        await api.delete(`/notes/${noteToDelete}`);
        setNotes(notes.filter(note => note.id !== noteToDelete));
        setNoteToDelete(null);
      } catch (error) {
        console.error('Erro ao excluir nota:', error);
      }
    }
  };

  const handleSaveNote = async (title: string, text: string) => {
    try {
      const response = await api.post('/notes', { title, text });
      setNotes([...notes, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar nota:', error);
    }
  };

  const handleUpdateNote = async (id: number, title: string, text: string) => {
    try {
      await api.put(`/notes/${id}`, { title, text });
      setNotes(notes.map(note => (note.id === id ? { id, title, text } : note)));
      setShowEditNoteModal(false);
    } catch (error) {
      console.error('Erro ao atualizar nota:', error);
    }
  };

  const expandedNote = notes.find(note => note.id === expandedNoteId);

  return (
    <div className='note-list'>
      <h2>Lista de Notas</h2>
      <div className="add-note" onClick={handleAddNote}>
        <FaPlus />
      </div>
      <br />
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3 className="note-title" onClick={() => toggleNote(note.id)}>
              {note.title}
            </h3>
            <div className="note-actions">
              <FaEdit
                className="icon"
                onClick={() => handleEditNote(note.id)}
              />
              <FaTrash
                className="icon"
                onClick={() => handleDeleteNote(note.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      {expandedNote && (
        <Modal
          title={expandedNote.title}
          content={expandedNote.text}
          onClose={closeModal}
        />
      )}
      {showAddNoteModal && (
        <AddNoteModal
          onAddNote={handleSaveNote}
          onClose={() => setShowAddNoteModal(false)}
        />
      )}
      {showEditNoteModal && noteToEdit && (
        <EditNoteModal
          note={noteToEdit}
          onSave={handleUpdateNote}
          onClose={() => setShowEditNoteModal(false)}
        />
      )}
      {noteToDelete !== null && (
        <ConfirmDeleteModal
          onConfirm={confirmDeleteNote}
          onCancel={() => setNoteToDelete(null)}
        />
      )}
    </div>
  );
};

export default NoteList;
