import { generateId } from "../utils/GenerateId.js"



export class Note {
  constructor(id, title, content, dateAdded, dateUpdated, color) {

    this.id = id || generateId()
    this.title = title
    this.content = content
    this.dateAdded = dateAdded
    this.dateUpdated = dateUpdated
    this.color = color
  }





  get ListTemplate() {
    return `
      <div class="card fixed-size-card" style="background-color: ${this.color};">
          <div class="card-body">
            <h3 class="card-title">${this.title}</h3>
            <p>${this.content}</p>
          </div>
        </div>

    `
  }





}