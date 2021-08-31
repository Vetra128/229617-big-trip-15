import {firstLitUpperCase} from '../utils/common';
import DestinationListView from './destination-list';
import EventTypeView from './event-type';
import EventDetailsView from './event-details';
import AbstractView from './abstract.js';

const createRouteItemEditTemplate = (item, types, cities) => (
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${item.type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          ${new EventTypeView(item.type, types).getTemplate()}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${firstLitUpperCase(item.type)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${item.destination}" list="destination-list-1">
          ${new DestinationListView(cities).getTemplate()}
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
      ${new EventDetailsView({offers: item.offers, destinationInfo: {description: item.destinationInfo.description}}).getTemplate()}
    </form>
  </li>`
);

export default class RouteItemEdit extends AbstractView{
  constructor(itemData, types, cities) {
    super();
    this._itemData = itemData;
    this._types = types;
    this._cities = cities;

    this._rollUpBtnClickHandler = this._rollUpBtnClickHandler.bind(this);
    this._formSubmitClickHandler = this._formSubmitClickHandler.bind(this);
  }

  getTemplate() {
    return createRouteItemEditTemplate(this._itemData, this._types, this._cities);
  }

  _rollUpBtnClickHandler(evt) {
    evt.preventDefault();
    this._callback.rollUpClick();
  }

  _formSubmitClickHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmitClick();
  }

  setRollUpBtnClickHandler(callback) {
    this._callback.rollUpClick = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._rollUpBtnClickHandler);
  }

  setFormSubmitClickHandler(callback) {
    this._callback.formSubmitClick = callback;
    this.getElement().querySelector('form').addEventListener('submit', this._formSubmitClickHandler);
  }
}
