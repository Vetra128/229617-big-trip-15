import AbstractView from './abstract.js';

const createEventOffersTemplate = (offers) =>
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


export default class EventOffers extends AbstractView{
  constructor(offers) {
    super();
    this._offers = offers;
  }

  getTemplate() {
    return createEventOffersTemplate(this._offers);
  }
}
