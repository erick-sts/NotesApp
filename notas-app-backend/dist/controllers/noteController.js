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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getAll = void 0;
const noteModel_1 = require("../models/noteModel");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield (0, noteModel_1.getAllNotes)();
        res.json(notes);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar notas');
    }
});
exports.getAll = getAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = { text: req.body.text };
        const newNote = yield (0, noteModel_1.createNote)(note);
        res.json(newNote);
    }
    catch (err) {
        res.status(500).send('Erro ao adicionar nota');
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const text = req.body.text;
        yield (0, noteModel_1.updateNote)(id, text);
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send('Erro ao atualizar nota');
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        yield (0, noteModel_1.deleteNote)(id);
        res.status(204).send();
    }
    catch (err) {
        res.status(500).send('Erro ao deletar nota');
    }
});
exports.remove = remove;
