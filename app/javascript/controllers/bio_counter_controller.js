import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "textarea", "counter" ]
  static values = { max: Number }

  connect() {
    this.update()
  }

  update() {
    const length = this.textareaTarget.value.length
    const remaining = Math.max(this.maxValue - length, 0)
    this.counterTarget.textContent = `${remaining} / ${this.maxValue}`
  }
}
