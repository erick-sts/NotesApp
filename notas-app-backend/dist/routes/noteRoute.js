"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = require("../controllers/noteController");
const router = (0, express_1.Router)();
router.get('/notes', noteController_1.getAll);
router.post('/notes', noteController_1.create);
router.put('/notes/:id', noteController_1.update);
router.delete('/notes/:id', noteController_1.remove);
exports.default = router;
