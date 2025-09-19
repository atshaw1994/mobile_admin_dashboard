import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "preview", "icon"]

  connect() {
    // nothing needed on connect
  }

  triggerUpload() {
    this.inputTarget.click()
  }

  previewImage() {
    const file = this.inputTarget.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (this.previewTarget.tagName === 'IMG') {
          this.previewTarget.src = e.target.result
        } else {
          const img = document.createElement('img')
          img.src = e.target.result
          img.className = this.previewTarget.className
          img.id = this.previewTarget.id
          this.previewTarget.replaceWith(img)
          this.previewTarget = img
        }
        if (this.iconTarget) this.iconTarget.style.display = 'none'
      }
      reader.readAsDataURL(file)
    }
  }
}
