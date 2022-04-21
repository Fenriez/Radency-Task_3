import { noteState } from "../repositories/notesDataTypes";

export default function countStats(notes: noteState[]) {
  type resultType = {
    category: string;
    total: number;
    archived: number;
  };

  let categories: string[] = [];

  notes.forEach((note) => {
    if (!categories.includes(note.category)) {
      categories.push(note.category);
    }
  });

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

  const result: resultType[] = categories.map((category) => {
    return {
      category: category,
      total: countNotesByCategory(category),
      archived: countArchivedNotesByCategory(category),
    };
  });

  return result;
}
