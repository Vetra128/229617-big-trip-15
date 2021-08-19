import {ucFirst} from '../utils';

export const sorting = (sortList) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
 ${sortList.map(({title, state}) =>
    (`<div class="trip-sort__item  trip-sort__item--${title}">
      <input id="sort-${title}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${title}" ${state}>
      <label class="trip-sort__btn" for="sort-${title}">${ucFirst(title)}</label>
    </div>` )).join('')}
  </form>`
);
