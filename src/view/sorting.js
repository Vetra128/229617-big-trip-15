import {firstLitUpperCase, createElement} from '../utils';

const sortingTemplate = (list) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
 ${list.map(({title, state}) =>
    (`<div class="trip-sort__item  trip-sort__item--${title}">
      <input id="sort-${title}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${title}" ${state}>
      <label class="trip-sort__btn" for="sort-${title}">${firstLitUpperCase(title)}</label>
    </div>` )).join('')}
  </form>`
);

export default class Sorting {
  constructor(sortList) {
    this._element = null;
    this._sortList = sortList;
  }

  getTemplate() {
    return sortingTemplate(this._sortList);
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
