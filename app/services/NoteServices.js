import { AppState } from "../AppState.js";
import { NoteController } from "../controllers/NoteController.js";
import { Note } from "../models/Note.js";

class NoteServices {
  createNote(formData) {
    AppState.notes.push(new Note(formData))
    console.log(AppState.notes);
  }




}


export const noteService = new NoteServices()