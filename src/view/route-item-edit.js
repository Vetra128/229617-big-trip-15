import {firstLitUpperCase, createElement} from '../utils';

const eventTypeTemplate = (currentType, types) =>
  `<div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${types.map((item) =>
    (`<div class="event__type-item">
        <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio"
               name="event-type" value="${item}" ${currentType===item ? 'checked' : ''}>
          <label class="event__type-label  event__type-label--${item}"
                 for="event-type-${item}-1">${firstLitUpperCase(item)}</label>
      </div>`)).join('')}
    </fieldset>
  </div>`;

const destinationListTemplate = (cities) =>
  `<datalist id="destination-list-1">
            ${cities.map((item) =>
    (`<option value="${item}"></option>`)).join('')}
          </datalist>`;

const offersTemplate = (offers) => !offers ? ''
  : `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offers.map((item) => {
    const classTemp = item.title.split(' ').pop().toLowerCase();
    return `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${classTemp}-1" type="checkbox" name="event-offer-${classTemp}" ${item.isChecked ? 'checked' : ''}>
              <label class="event__offer-label" for="event-offer-${classTemp}-1">
                <span class="event__offer-title">${item.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${item.price}</span>
              </label>
            </div>`;
  }).join('')}
        </div>
        </section>`;

const destinationTemplate = (items) => `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${items.join(' ')}</p>
        </section>`;

const eventDetailsTemplate = (item) => (!item.offers && !item.destinationInfo.description) ? ''
  : `<section class="event__details">
        ${offersTemplate(item.offers)}
        ${destinationTemplate(item.destinationInfo.description)}
      </section>`;

const routeItemEditTemplate = (item, types, cities) => (
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${item.type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          ${eventTypeTemplate(item.type, types)}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${firstLitUpperCase(item.type)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${item.destination}" list="destination-list-1">
          ${destinationListTemplate(cities)}
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${item.dateFrom.format('DD/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${item.dateTo.format('DD/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${item.basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      ${eventDetailsTemplate(item)}
    </form>
  </li>`
);

export default class RouteItemEdit {
  constructor(itemData, types, cities) {
    this._element = null;
    this._itemData = itemData;
    this._types = types;
    this._cities = cities;
  }

  getTemplate() {
    return routeItemEditTemplate(this._itemData, this._types, this._cities);
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
