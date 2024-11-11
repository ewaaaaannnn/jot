import { AppState } from "../AppState.js";
import { noteService } from "../services/NoteServices.js";

export class NoteController {
  constructor() {
    console.log('hello');
    AppState.on('notes', this.drawNotesList)
    noteService.loadNote()
  }




  drawNotesList() {
    console.log('✏️📂📂');
    const notesListElm = document.getElementById('notes-list')
    notesListElm.innerHTML = ''
    AppState.notes.forEach(note => notesListElm.innerHTML += note.ListTemplate)

    const noteCountElm = document.getElementById('note-count')
    noteCountElm.innerHTML = AppState.notes.length.toString()
  }



  createNote() {
    console.log('Create Note');
    event.preventDefault();
    const formElm = event.target;
    const formData = {
      title: formElm.title.value,   // Corrected to use .value
      dateAdded: new Date(),        // Set current date for dateAdded
      color: formElm.color.value    // Corrected to use .value
    }
    console.log(formData);
    noteService.createNote(formData);
    this.drawNotesList();
  }



  drawActiveNote() {
    console.log('✏️👉📂');
    const activeNoteElm = document.getElementById('active-note')
    activeNoteElm.innerHTML = AppState.activeNote.ActiveTemplate
  }

  selectActiveNote(noteId) {
    console.log('👉📂', noteId);
    noteService.selectActiveNote(noteId)
    this.drawActiveNote()
  }

  saveActiveNote() {
    event.preventDefault()
    console.log('💾📂', AppState.activeNote);
    const formElm = event.target
    // @ts-ignore
    let newText = formElm.description.value
    console.log(newText);
    noteService.saveActiveNote(newText)
    this.drawNotesList()
    this.drawActiveNote()
  }


  deleteNote(noteId) {
    console.log('deleting!', noteId);
    const confirmed = confirm("Are you sure you want to delete this?")
    if (!confirmed) return

    noteService.deleteNote(noteId)

  }
}