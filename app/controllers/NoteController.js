import { AppState } from "../AppState.js";
import { noteService } from "../services/NoteServices.js";

export class NoteController {
  constructor() {
    console.log('hello');

  }




  drawNotesList() {
    console.log('✏️📂📂');
    const notesListElm = document.getElementById('notes-list')
    notesListElm.innerHTML = ''
    AppState.notes.forEach(note => notesListElm.innerHTML += notes.ListTemplate)

    const noteCountElm = document.getElementById('note-count')
    noteCountElm.innerHTML = AppState.notes.length.toString()
  }



  createNote() {
    console.log('Create Note');
    event.preventDefault()
    const formElm = event.target
    const formData = {
      title: formElm.title,
      dateAdded: formElm.dateAdded,
      color: formElm.color
    }
    console.log(formData);
    noteService.createNote(formData)
    this.drawNotesList()
  }
}