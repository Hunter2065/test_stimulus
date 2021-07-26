import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['button']

  boom() {
    this.buttonTarget.textContent = 'Bye, bye'
  }
}
