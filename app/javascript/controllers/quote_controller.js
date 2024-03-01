import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="quote"
export default class extends Controller {
  static targets = ['name']
  connect() {
    console.log (" I'm connected to 'data-controller=quote'")
  }

  getQuoteName = () => {
    const element = this.nameTarget
    const name = element.textContent
    navigator.clipboard.writeText(name)
    alert(`you clicked the quote: ${name} and it are now on your clipboard`)
  }
}
