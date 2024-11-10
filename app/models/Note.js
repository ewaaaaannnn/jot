import { generateId } from "../utils/GenerateId.js"



export class Note {
  constructor(id, title, content, dateAdded, dateUpdated) {

    this.id = id || generateId()
    this.title = title
    this.content = content
    this.dateAdded = dateAdded
    this.dateUpdated = dateUpdated
  }
}