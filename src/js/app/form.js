import {Selecter} from '../components/Selecter';

const formSelectsArr = Array.from(document.querySelectorAll('.form__select'));
const formSelectConfig = {
  selecterTplSel: '.selecter-template',
  selecterWrapperSel: '.selecter',
  selecterTogglerSel: '.selecter__placeholder',
  selecterTitleSel: '.selecter__title',
  selecterListClass: 'selecter__list',
  selecterOptionClass: 'selecter__option',
  selecterClassAvtive: 'selecter_active'
};
formSelectsArr.forEach(formSelectsArrEl => {
  const selecter = new Selecter(formSelectsArrEl, formSelectConfig);
  selecter.init();
});
