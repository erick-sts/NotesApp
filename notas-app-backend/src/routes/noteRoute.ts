import { Router } from 'express';
import { getAll, create, update, remove } from '../controllers/noteController';

const router = Router();

router.get('/notes', getAll);
router.post('/notes', create);
router.put('/notes/:id', update);
router.delete('/notes/:id', remove);

export default router;
