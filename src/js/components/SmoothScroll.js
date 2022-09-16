export class SmoothScroll {
  constructor(toggler) {
    this._toggler = toggler;
    this._target = document.querySelector(`.${this._toggler.getAttribute('data-target')}`);
  }

  setEventListeners() {
    this._toggler.addEventListener('click', e => {
      e.preventDefault();
      this._target.scrollIntoView({
          behavior: 'smooth'
      });
    });
  }
}
