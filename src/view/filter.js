import {firstLitUpperCase} from '../utils';

export const filter = (currentFilter, filters) => (
  `<form class="trip-filters" action="#" method="get">
    ${filters.map((item) =>
    (`<div class="trip-filters__filter">
       <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${item}" ${currentFilter===item ? 'checked': ''}>
       <label class="trip-filters__filter-label" for="filter-everything">${firstLitUpperCase(item)}</label>
     </div>` )).join('')}
     <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);
