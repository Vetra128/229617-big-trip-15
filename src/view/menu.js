import {firstLitUpperCase} from '../utils/common';
import AbstractView from './abstract.js';

const menuTemplate = (currentMenu, menu) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${menu.map((item) =>
    (`<a class="trip-tabs__btn${currentMenu===item ? ' trip-tabs__btn--active' : ''}" href="#">${firstLitUpperCase(item)}</a>` )).join('')}
  </nav>`
);

export default class Menu extends AbstractView{
  constructor(currentMenu, menu) {
    super();
    this._currentMenu = currentMenu;
    this._menu = menu;
  }

  getTemplate() {
    return menuTemplate(this._currentMenu, this._menu);
  }
}
