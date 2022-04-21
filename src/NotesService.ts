import Note, { noteState } from "./NoteTypes";

class NotesService {
  async create(data: noteState) {
    const note = await Note.create({ ...data });
    return note;
  }

  async getAll() {
    const notes = await Note.find();
    return notes;
  }
  async getStats() {
    const notes = await Note.find();

    let categories: string[] = ["Task", "Idea", "Random Thought"];
    type resultType = {
      category: string;
      total: number;
      archived: number;
    };

    const countNotesByCategory = (category: string): number => {
      let result: number = 0;
      notes.forEach((note) => {
        if (note.category === category) {
          result++;
        }
      });
      return result;
    };

    const countArchivedNotesByCategory = (category: string): number => {
      let result: number = 0;
      notes.forEach((note) => {
        if (note.category === category && note.isArchived === true) {
          result++;
        }
      });
      return result;
    };

    const countStats = () => {
      let result: resultType[] = categories.map((category) => {
        return {
          category: category,
          total: countNotesByCategory(category),
          archived: countArchivedNotesByCategory(category),
        };
      });
      return result;
    };
    return countStats();
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

  async update(id: string, data: noteState) {
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
