import Express from "express";
import NotesService from "./NotesService";

class NotesController {
  async create(req: Express.Request, res: Express.Response) {
    try {
      const note = await NotesService.create(req.body);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req: Express.Request, res: Express.Response) {
    try {
      const notes = await NotesService.getAll();
      return res.json(notes);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getStats(req: Express.Request, res: Express.Response) {
    try {
      const stats = await NotesService.getStats();
      return res.json(stats);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req: Express.Request, res: Express.Response) {
    try {
      const note = await NotesService.getOne(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req: Express.Request, res: Express.Response) {
    try {
      const updatedNote = await NotesService.update(req.params.id, req.body);
      return res.json(updatedNote);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  
  async delete(req: Express.Request, res: Express.Response) {
    try {
      const note = await NotesService.delete(req.params.id);
      return res.json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new NotesController();
