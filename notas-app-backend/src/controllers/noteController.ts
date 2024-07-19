import { Request, Response } from 'express';
import { getAllNotes, createNote, updateNote, deleteNote, Note } from '../models/noteModel';

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await getAllNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).send('Erro ao buscar notas');
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, text } = req.body; 
    const note: Note = { title, text };
    const newNote = await createNote(note);
    res.json(newNote);
  } catch (err) {
    res.status(500).send('Erro ao adicionar nota');
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, text } = req.body; // Extrai o título e o texto da requisição
    await updateNote(id, title, text); // Atualiza a nota com título e texto
    res.status(200).send();
  } catch (err) {
    res.status(500).send('Erro ao atualizar nota');
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteNote(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send('Erro ao deletar nota');
  }
};
