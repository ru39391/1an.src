export class Slider {
  constructor(slider, {
    sliderElSel,
    sliderElClassActive,
    sliderWrapperSel,
    sliderNavBtnPrevSel,
    sliderNavBtnNextSel,
    sliderPaginationSel,
    sliderPaginationItemClass,
    sliderPaginationItemClassActive
  }) {
    this._slider = slider;
    this._sliderElemsArr = Array.from(this._slider.querySelectorAll(sliderElSel));
    this._sliderElClassActive = sliderElClassActive;
    this._sliderWrapper = this._slider.querySelector(sliderWrapperSel);
    this._sliderNavBtnPrev = this._slider.querySelector(sliderNavBtnPrevSel);
    this._sliderNavBtnNext = this._slider.querySelector(sliderNavBtnNextSel);
    this._sliderPagination = this._slider.querySelector(sliderPaginationSel);
    this._sliderPaginationItemsArr = [];
    this._sliderPaginationItemClass = sliderPaginationItemClass;
    this._sliderPaginationItemClassActive = sliderPaginationItemClassActive;
  }

  _createPagination(holder, className, classNameActive, counter) {
    const pagination = holder.cloneNode(false);
    for (let i = 0; i < counter; i++) {
      const item = document.createElement('span');
      item.classList.add(className);
      if(i == 0) {
        item.classList.add(classNameActive);
      }
      pagination.append(item);
      this._sliderPaginationItemsArr.push(item);
    };
    holder.replaceWith(pagination);
  }

  _handleClassName(target, className, arr) {
    const elActive = arr.find(item => item.classList.contains(className));
    elActive.classList.remove(className);
    target.classList.add(className);
  }

  _scrollSlides(currentEl) {
    const scrolledSlidesArr = this._sliderElemsArr.filter((item, index, arr) => index < this._sliderElemsArr.indexOf(currentEl));
    const scrolledWidthArr = scrolledSlidesArr.map(item => item.offsetWidth);
    let scrolledWidth = 0;
    for (let i = 0; i < scrolledWidthArr.length; i++) {
      if(scrolledWidthArr[i]) {
        scrolledWidth += scrolledWidthArr[i];
      }
    };
    this._sliderWrapper.style.transform = `translateX(-${scrolledWidth}px)`;
  }

  _handleNavBtn(currentBtn, btn, counter, counterStep) {
    const currentEl = this._slider.querySelector(`.${this._sliderElClassActive}`);
    const indexCurrent = this._sliderElemsArr.indexOf(currentEl);
    btn.disabled = false;
    if(indexCurrent > counter) {
      this._scrollSlides(this._sliderElemsArr[indexCurrent - 1]);
      this._handleClassName(this._sliderElemsArr[indexCurrent - 1], this._sliderElClassActive, this._sliderElemsArr);
      this._handleClassName(this._sliderPaginationItemsArr[indexCurrent - 1], this._sliderPaginationItemClassActive, this._sliderPaginationItemsArr);
    } else {
      this._scrollSlides(this._sliderElemsArr[indexCurrent + 1]);
      this._handleClassName(this._sliderElemsArr[indexCurrent + 1], this._sliderElClassActive, this._sliderElemsArr);
      this._handleClassName(this._sliderPaginationItemsArr[indexCurrent + 1], this._sliderPaginationItemClassActive, this._sliderPaginationItemsArr);
    }
    if(indexCurrent == counter + counterStep) {
      currentBtn.disabled = true;
    }
  }

  setEventListeners() {
    this._sliderElemsArr.forEach((item, index, arr) => {
      item.addEventListener('click', e => {
        e.preventDefault();
        this._sliderNavBtnPrev.disabled = false;
        this._sliderNavBtnNext.disabled = false;
        if(index == 0) {
          this._sliderNavBtnPrev.disabled = true;
        }
        if(index == arr.length - 1) {
          this._sliderNavBtnNext.disabled = true;
        }
        this._scrollSlides(e.currentTarget);
        this._handleClassName(e.currentTarget, this._sliderElClassActive, arr);
        this._handleClassName(this._sliderPaginationItemsArr[index], this._sliderPaginationItemClassActive, this._sliderPaginationItemsArr);
      });
    });

    this._sliderNavBtnPrev.addEventListener('click', e => {
      e.preventDefault();
      this._handleNavBtn(e.currentTarget, this._sliderNavBtnNext, 0, 1);
    });

    this._sliderNavBtnNext.addEventListener('click', e => {
      e.preventDefault();
      this._handleNavBtn(e.currentTarget, this._sliderNavBtnPrev, this._sliderElemsArr.length - 1, -1);
    });
  }

  init() {
    this._sliderNavBtnPrev.disabled = true;
    this._sliderElemsArr[0].classList.add(this._sliderElClassActive);
    this._createPagination(this._sliderPagination, this._sliderPaginationItemClass, this._sliderPaginationItemClassActive, this._sliderElemsArr.length);
  }
}
