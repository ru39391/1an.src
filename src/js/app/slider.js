import {Slider} from '../components/Slider';

const slidersArr = Array.from(document.querySelectorAll('.scroller'));
const sliderConfig = {
  sliderElSel: '.scroller__slide',
  sliderElClassActive: 'scroller__slide_active',
  sliderWrapperSel: '.scroller__wrapper',
  sliderNavBtnPrevSel: '.scroller-nav__btn_dir_prev',
  sliderNavBtnNextSel: '.scroller-nav__btn_dir_next',
  sliderPaginationSel: '.scroller-pagination',
  sliderPaginationItemClass: 'scroller-pagination__item',
  sliderPaginationItemClassActive: 'scroller-pagination__item_active'
};
slidersArr.forEach(slidersArrEl => {
  const slider = new Slider(slidersArrEl, sliderConfig);
  slider.init();
  slider.setEventListeners();
});
