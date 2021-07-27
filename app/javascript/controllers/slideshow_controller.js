import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['slide'];
  static values = { index: Number };

  previous() {
    if (parseInt(this.indexValue) == 0) {
      this.indexValue = this.slideTargets.length - 1;
    } else {
      this.indexValue--;
    }
  }

  next() {
    if (parseInt(this.indexValue) == this.slideTargets.length - 1) {
      this.indexValue = 0;
    } else {
      this.indexValue++;
    }
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue;
    });
  }
}
