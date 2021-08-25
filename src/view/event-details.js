import { createElement } from '../utils';
import OffersView from './offers';
import DestinationInfoView from './destination-info';

const eventDetailsTemplate = (item) => (!item.offers && !item.destinationInfo.description) ? ''
  : `<section class="event__details">
        ${new OffersView(item.offers).getTemplate()}
        ${new DestinationInfoView(item.destinationInfo).getTemplate()}
      </section>`;

export default class EventDetails {
  constructor(item) {
    this._element = null;
    this._item = item;
  }

  getTemplate() {
    return eventDetailsTemplate(this._item);
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
