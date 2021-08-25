import { createElement } from '../utils';

const eventOffersTemplate = (offers) =>
  !offers.filter((item) => item.isChecked)
    ? ''
    : `<h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
    ${offers.map(({ title, price, isChecked }) =>
    (isChecked ? `<li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>` : '')).join('')}
    </ul>`;


export default class EventOffers {
  constructor(offers) {
    this._element = null;
    this._offers = offers;
  }

  getTemplate() {
    return eventOffersTemplate(this._offers);
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
