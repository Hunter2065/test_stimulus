import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['source'];

  copy(event) {
    event.preventDefault(); // For removing default url inside 'href', like '#'
    this.sourceTarget.select();
    document.execCommand('copy');
  }
}
