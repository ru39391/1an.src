export class Toggler {
  constructor(toggler, togglersArr, {
    togglerActiveClass,
    togglerHolderSel,
    togglerTargetSel,
    togglerTargetActiveClass
  }) {
    this._toggler = toggler;
    this._togglersArr = togglersArr;
    this._togglerActiveClass = togglerActiveClass;
    this._togglerHolder = toggler.closest(togglerHolderSel);
    this._togglerTarget = this._togglerHolder.querySelector(togglerTargetSel);
    this._togglerTargetsArr = Array.from(document.querySelectorAll(togglerTargetSel));
    this._togglerTargetActiveClass = togglerTargetActiveClass;
  }

  _handleClassList(target, arr, activeClass) {
    const handledElemsArr = arr.filter(item => item != target);
    handledElemsArr.forEach(handledElemsArrEl => {
      handledElemsArrEl.classList.remove(activeClass);
    });
  }

  setEventListeners() {
    this._toggler.addEventListener('click', e => {
      e.preventDefault();
      e.target.classList.toggle(this._togglerActiveClass);
      this._togglerTarget.classList.toggle(this._togglerTargetActiveClass);

      this._handleClassList(e.target, this._togglersArr, this._togglerActiveClass);
      this._handleClassList(this._togglerTarget, this._togglerTargetsArr, this._togglerTargetActiveClass);
    });
  }
}
