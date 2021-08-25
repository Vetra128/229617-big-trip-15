import {createElement, firstLitUpperCase} from '../utils';

const menuTemplate = (currentMenu, menu) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${menu.map((item) =>
    (`<a class="trip-tabs__btn${currentMenu===item ? ' trip-tabs__btn--active' : ''}" href="#">${firstLitUpperCase(item)}</a>` )).join('')}
  </nav>`
);

export default class Menu {
  constructor(currentMenu, menu) {
    this._element = null;
    this._currentMenu = currentMenu;
    this._menu = menu;
  }

  getTemplate() {
    return menuTemplate(this._currentMenu, this._menu);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
