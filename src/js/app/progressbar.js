import {Progress} from '../components/Progress';

const progressBarBtnsArr = Array.from(document.querySelectorAll('.progressbar__btn'));
const progressBarConfig = {
  barHolderSel: '.progressbar',
  barRunnerSel: '.progressbar__runner'
};
progressBarBtnsArr.forEach(progressBarBtnsArrEl => {
  const progressBar = new Progress(progressBarBtnsArrEl, progressBarConfig);
  progressBar.setEventListeners();
  progressBar.init();
});
