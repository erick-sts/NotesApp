import db from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export interface Note {
  id?: number;
  title: string;
  text: string;
  created_at?: Date;
}

export const getAllNotes = async (): Promise<Note[]> => {
  const [rows] = await db.query<Note[] & RowDataPacket[]>('SELECT * FROM notes');
  return rows;
};

export const createNote = async (note: Note): Promise<Note> => {
  const [result] = await db.query<ResultSetHeader>('INSERT INTO notes (title, text) VALUES (?, ?)', [note.title, note.text]);
  return { id: result.insertId, ...note };
};

export const updateNote = async (id: number, title: string, text: string): Promise<void> => {
  await db.query<ResultSetHeader>('UPDATE notes SET title = ?, text = ? WHERE id = ?', [title, text, id]);
};

export const deleteNote = async (id: number): Promise<void> => {
  await db.query<ResultSetHeader>('DELETE FROM notes WHERE id = ?', [id]);
};
