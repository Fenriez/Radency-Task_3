import countStats from "../helpers/notesStatsCounter";
import { noteData } from "../repositories/notesDataTypes";
import Note from "../repositories/notesSchemas";

class NotesService {
  async create(data: noteData) {
    const note = await Note.create({ ...data });
    return note;
  }

  async getAll() {
    const notes = await Note.find();
    return notes;
  }

  async getStats() {
    const notes = await Note.find();
    const stats = countStats(notes);
    return stats;
  }

  async getOne(id: string) {
    if (!id) {
      throw new Error("ID missing");
    }
    const note = await Note.findById(id);
    if (!note) {
      throw new Error("Note has not been found");
    }
    return note;
  }

  async update(id: string, data: noteData) {
    if (!id) {
      throw new Error("ID missing");
    }
    const updatedNote = await Note.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedNote;
  }

  async delete(id: string) {
    if (!id) {
      throw new Error("ID missing");
    }
    const note = await Note.findByIdAndDelete(id);
    return note;
  }
}

export default new NotesService();
