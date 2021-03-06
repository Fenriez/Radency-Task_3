import express from "express";
import NoteController from "../services/NotesController";

const router = express.Router();

router.post('/notes', NoteController.create)
router.get('/notes', NoteController.getAll)
router.get('/notes/stats', NoteController.getStats)
router.get('/notes/:id', NoteController.getOne)
router.patch('/notes/:id', NoteController.update)
router.delete('/notes/:id', NoteController.delete)

export default router;