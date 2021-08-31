import AbstractView from './abstract.js';

const createOffersTemplate = (offers) => !offers ? ''
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

export default class Offers extends AbstractView{
  constructor(offers) {
    super();
    this._offers = offers;
  }

  getTemplate() {
    return createOffersTemplate(this._offers);
  }
}
