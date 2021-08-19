import {firstLitUpperCase} from '../utils';

export const menu = (currentMenu, menuList) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${menuList.map((item) =>
    (`<a class="trip-tabs__btn${currentMenu===item ? ' trip-tabs__btn--active' : ''}" href="#">${firstLitUpperCase(item)}</a>` )).join('')}
  </nav>`
);

