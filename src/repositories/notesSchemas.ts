import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    text: { type: String },
    isArchived: { type: Boolean, required: true },
  },
  { versionKey: false }
);

export default mongoose.model("Note", NoteSchema);
