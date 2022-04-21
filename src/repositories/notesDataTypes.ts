
export interface noteState extends noteData {
  _id: string;
}

export interface noteData {
  name: string;
  category: string;
  text?: string;
  isArchived: boolean;
}

// const newNoteSchema: Yup.ObjectSchema<noteData> = Yup.object({
//   name: Yup.string().required("Name is required"),
//   category: Yup.string().required("Category is required"),
//   text: Yup.string().optional(),
//   isArcheved: Yup.boolean().required("Archivation flag is required"),
// }).required()
