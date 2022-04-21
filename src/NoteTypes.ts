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

export interface noteState {
  _id?: string;
  name: string;
  category: string;
  text?: string;
  isArchived: boolean;
}

export default mongoose.model("Note", NoteSchema);
