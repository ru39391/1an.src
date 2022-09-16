export class Progress {
  constructor(toggler, {
    barHolderSel,
    barRunnerSel,
  }) {
    this._toggler = toggler;
    this._barHolder = this._toggler.closest(barHolderSel);
    this._barRunner = this._barHolder.querySelector(barRunnerSel);
  }

  _getValue(el) {
    const barValue = el.textContent.split(' ').find(item => Number(item));
    return Boolean(barValue) ? Number(barValue) : 0;
  }

  _setValue(value) {
    this._barRunner.textContent = `${value} %`;
    this._barRunner.style.width = `${value}%`;
  }

  _handleProgress(el, stepValueSrc = null) {
    let currentValue = this._getValue(el);
    if(stepValueSrc) {
      currentValue += this._getValue(stepValueSrc);
    }
    if(currentValue > 100) {
      this._setValue(100);
      this._toggler.disabled = true;
      return false;
    } else {
      this._setValue(currentValue);
    }
  }

  setEventListeners() {
    this._toggler.addEventListener('click', e => {
      e.preventDefault();
      this._handleProgress(this._barRunner, e.target);
    });
  }

  init() {
    this._handleProgress(this._barRunner);
  }
}
