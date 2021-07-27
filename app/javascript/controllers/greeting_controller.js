import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['name', 'output'];

  print() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
