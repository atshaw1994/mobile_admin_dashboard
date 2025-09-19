import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]

  connect() {
    this.cardTargets.forEach(card => {
      card.addEventListener("click", (e) => {
        // If the click is on a link or button, or inside .user-actions, do nothing
        if (
          e.target.closest('.user-actions') ||
          e.target.tagName === 'A' ||
          e.target.closest('a') ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('button')
        ) {
          return;
        }
        window.location = card.getAttribute('data-user-url')
      })
    })
  }
}
