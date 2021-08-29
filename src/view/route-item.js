import {dateDuration} from '../utils';
import EventOffersView from './event-offers';
import AbstractView from './abstract.js';

const routeItemTemplate = (item) => {
  const duration = dateDuration(item.dateFrom, item.dateTo);
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${item.dateFrom.format('YYYY-MM-DD')}>${item.dateFrom.format('MMM-DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${item.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${item.destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime=${item.dateFrom.format('YYYY-MM-DDTHH:mm')}>${item.dateFrom.format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime=${item.dateTo.format('YYYY-MM-DDTHH:mm')}>${item.dateTo.format('HH:mm')}</time>
        </p>
        <p class="event__duration">${duration}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${item.basePrice}</span>
      </p>
      ${new EventOffersView(item.offers).getTemplate()}
      <button class="event__favorite-btn  ${item.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class RouteItem extends AbstractView{
  constructor(itemData) {
    super();
    this._itemData = itemData;
  }

  getTemplate() {
    return routeItemTemplate(this._itemData);
  }
}
