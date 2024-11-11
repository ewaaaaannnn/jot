import { generateId } from "../utils/GenerateId.js"



export class Note {
  constructor(id, title, content, dateAdded, dateUpdated, color) {

    this.id = id || generateId()
    this.title = title
    this.content = content
    this.dateAdded = dateAdded == undefined ? new Date() : new Date(dateAdded)
    this.dateUpdated = dateUpdated == undefined ? new Date() : new Date(dateUpdated)
    this.color = color
  }





  get ListTemplate() {
    return `
      <div onclick="app.NoteController.selectActiveNote('${this.id}')" class="card fixed-size-card my-3" style="background-color: ${this.color};">
          <div class="card-body">
            <h3 class="card-title">${this.title}</h3>
            <p>${this.content}</p>
          </div>
        </div>

    `
  }
  get ActiveTemplate() {
    return `
      
        <div class="p-4 rounded shadow-sm" style="background-color: ${this.color};">
          <h2>${this.title}</h2>
          <p>${this.LongReportedDate}</p>
          <hr>
          <form onsubmit="app.NoteController.saveActiveNote()">
            <textarea name="description" class="form-control" rows="25">${this.content}</textarea>
            <button class="btn btn-success">Save</button> 
          </form>
          <button onclick="app.NoteController.deleteNote('${this.id}')" class="btn btn-danger">Delete</button>
          <p>Last Updated: ${this.FormattedDateUpdated}</p>
        </div>
      </div>
    `;
  }

  get FormattedDateUpdated() {
    return this.dateUpdated.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  get LongReportedDate() {
    return this.dateAdded.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', weekday: 'long', year: 'numeric', day: 'numeric', dayPeriod: 'long', month: 'long', era: 'long' })
  }
}