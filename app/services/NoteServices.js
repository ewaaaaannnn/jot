import { AppState } from "../AppState.js";
import { NoteController } from "../controllers/NoteController.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js";

class NoteServices {
  createNote(formData) {
    // Destructure formData so it matches the constructor signature
    const { title, dateAdded, color } = formData;

    // Create the note with the correct parameters
    AppState.notes.push(new Note(undefined, title, '', dateAdded, undefined, color));

    console.log(AppState.notes);
    this.saveNote()
  }

  selectActiveNote(noteId) {
    console.log('service', noteId);
    const selectedNote = AppState.notes.find(note => noteId == note.id)
    console.log(selectedNote);
    AppState.activeNote = selectedNote
  }

  saveActiveNote(newText) {
    const note = AppState.activeNote
    note.content = newText // overwrite active description with new description
    note.dateUpdated = new Date() // change the updatedAt to now
    AppState.emit('activeNote') // tricks the listener into triggering our draw
    this.saveNote()
  }


  deleteNote(noteId) {
    console.log('service delteting', noteId);
    const noteToDelete = AppState.notes.find(note => note.id == noteId)
    console.log('🔥', noteToDelete);
    const indexToRemove = AppState.notes.indexOf(noteToDelete)
    AppState.notes.splice(indexToRemove, 1)
    this.saveNote()
  }



  saveNote() {
    const plainNotes = AppState.notes.map(note => ({
      id: note.id,
      title: note.title,
      content: note.content,
      dateAdded: note.dateAdded,
      dateUpdated: note.dateUpdated,
      color: note.color
    }));

    let stringData = JSON.stringify(plainNotes);
    localStorage.setItem('notes', stringData);
  }


  loadNote() {
    let stringData = localStorage.getItem('notes');
    console.log('🧵💾', stringData);
    if (!stringData) return;
    let notesData = JSON.parse(stringData);
    console.log('💾', notesData);
    const notes = notesData.map(noteData => new Note(
      noteData.id,
      noteData.title,
      noteData.content,
      noteData.dateAdded,
      noteData.dateUpdated,
      noteData.color
    ));
    console.log('✨', notes);
    AppState.notes = notes;
  }




}


export const noteService = new NoteServices()