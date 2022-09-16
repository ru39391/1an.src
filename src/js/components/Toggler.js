export class Toggler {
  constructor(toggler, togglersArr, {
    togglerClassActive,
    togglerHolderSel,
    togglerTargetSel,
    togglerTargetClassActive
  }) {
    this._toggler = toggler;
    this._togglersArr = togglersArr;
    this._togglerClassActive = togglerClassActive;
    this._togglerHolder = toggler.closest(togglerHolderSel);
    this._togglerTarget = this._togglerHolder.querySelector(togglerTargetSel);
    this._togglerTargetsArr = Array.from(document.querySelectorAll(togglerTargetSel));
    this._togglerTargetClassActive = togglerTargetClassActive;
  }

  _handleClassList(target, arr, ClassActive) {
    const handledElemsArr = arr.filter(item => item != target);
    handledElemsArr.forEach(handledElemsArrEl => {
      handledElemsArrEl.classList.remove(ClassActive);
    });
  }

  setEventListeners() {
    this._toggler.addEventListener('click', e => {
      e.preventDefault();
      e.target.classList.toggle(this._togglerClassActive);
      this._togglerTarget.classList.toggle(this._togglerTargetClassActive);

      this._handleClassList(e.target, this._togglersArr, this._togglerClassActive);
      this._handleClassList(this._togglerTarget, this._togglerTargetsArr, this._togglerTargetClassActive);
    });
  }
}
