import {Toggler} from '../components/Toggler';

const navLinkTogglersArr = Array.from(document.querySelectorAll('.nav__link_type_category'));
const navLinkConfig = {
  togglerClassActive: 'nav__link_active',
  togglerHolderSel: '.nav__item',
  togglerTargetSel: '.nav__dropdown',
  togglerTargetClassActive: 'nav__dropdown_active',
};
navLinkTogglersArr.forEach((item, index, arr) => {
  const navLinkToggler = new Toggler(item, arr, navLinkConfig);
  navLinkToggler.setEventListeners();
});

const navTogglersArr = Array.from(document.querySelectorAll('.nav-toggler'));
const navTogglerConfig = {
  togglerClassActive: 'nav-toggler_active',
  togglerHolderSel: '.header',
  togglerTargetSel: '.nav',
  togglerTargetClassActive: 'nav_active',
};
navTogglersArr.forEach((item, index, arr) => {
  const navToggler = new Toggler(item, arr, navTogglerConfig);
  navToggler.setEventListeners();
});

const contentExpandersArr = Array.from(document.querySelectorAll('.content__expander'));
const contentExpanderConfig = {
  togglerClassActive: 'content__expander_active',
  togglerHolderSel: '.content',
  togglerTargetSel: '.content__expanded',
  togglerTargetClassActive: 'content__expanded_active',
};
contentExpandersArr.forEach((item, index, arr) => {
  const contentExpander = new Toggler(item, arr, contentExpanderConfig);
  contentExpander.setEventListeners();
});
