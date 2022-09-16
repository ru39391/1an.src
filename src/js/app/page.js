import {SmoothScroll} from '../components/SmoothScroll';

const backToTopBtn = document.querySelector('.back-to-top');
if(backToTopBtn) {
  const backToTop = new SmoothScroll(backToTopBtn);
  backToTop.setEventListeners();
}
