"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.createNote = exports.getAllNotes = void 0;
const db_1 = __importDefault(require("../config/db"));
const getAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query('SELECT * FROM notes');
    return rows;
});
exports.getAllNotes = getAllNotes;
const createNote = (note) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.default.query('INSERT INTO notes (text) VALUES (?)', [note.text]);
    return Object.assign({ id: result.insertId }, note);
});
exports.createNote = createNote;
const updateNote = (id, text) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.query('UPDATE notes SET text = ? WHERE id = ?', [text, id]);
});
exports.updateNote = updateNote;
const deleteNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.query('DELETE FROM notes WHERE id = ?', [id]);
});
exports.deleteNote = deleteNote;
