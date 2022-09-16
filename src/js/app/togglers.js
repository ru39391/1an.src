import {Toggler} from '../components/Toggler';

const navLinkTogglersArr = Array.from(document.querySelectorAll('.nav__link_type_category'));
const navLinkConfig = {
  togglerActiveClass: 'nav__link_active',
  togglerHolderSel: '.nav__item',
  togglerTargetSel: '.nav__dropdown',
  togglerTargetActiveClass: 'nav__dropdown_active',
};
navLinkTogglersArr.forEach((item, index, arr) => {
  const navLinkToggler = new Toggler(item, arr, navLinkConfig);
  navLinkToggler.setEventListeners();
});

const navTogglersArr = Array.from(document.querySelectorAll('.nav-toggler'));
const navTogglerConfig = {
  togglerActiveClass: 'nav-toggler_active',
  togglerHolderSel: '.header',
  togglerTargetSel: '.nav',
  togglerTargetActiveClass: 'nav_active',
};
navTogglersArr.forEach((item, index, arr) => {
  const navToggler = new Toggler(item, arr, navTogglerConfig);
  navToggler.setEventListeners();
});

const contentExpandersArr = Array.from(document.querySelectorAll('.content__expander'));
const contentExpanderConfig = {
  togglerActiveClass: 'content__expander_active',
  togglerHolderSel: '.content',
  togglerTargetSel: '.content__expanded',
  togglerTargetActiveClass: 'content__expanded_active',
};
contentExpandersArr.forEach((item, index, arr) => {
  const contentExpander = new Toggler(item, arr, contentExpanderConfig);
  contentExpander.setEventListeners();
});
