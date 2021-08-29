import {firstLitUpperCase} from '../utils/common';
import AbstractView from './abstract.js';

const filterTemplate = (currentFilter, filters) => (
  `<form class="trip-filters" action="#" method="get">
    ${filters.map((item) =>
    (`<div class="trip-filters__filter">
       <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${item}" ${currentFilter===item ? 'checked': ''}>
       <label class="trip-filters__filter-label" for="filter-everything">${firstLitUpperCase(item)}</label>
     </div>` )).join('')}
     <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class Filter extends AbstractView{
  constructor(currentFilter, filters) {
    super();
    this._currentFilter = currentFilter;
    this._filters = filters;
  }

  getTemplate() {
    return filterTemplate(this._currentFilter, this._filters);
  }
}
