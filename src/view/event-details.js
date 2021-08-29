import AbstractView from './abstract.js';
import OffersView from './offers';
import DestinationInfoView from './destination-info';

const eventDetailsTemplate = (item) => (!item.offers && !item.destinationInfo.description) ? ''
  : `<section class="event__details">
        ${new OffersView(item.offers).getTemplate()}
        ${new DestinationInfoView(item.destinationInfo).getTemplate()}
      </section>`;

export default class EventDetails extends AbstractView{
  constructor(item) {
    super();
    this._item = item;
  }

  getTemplate() {
    return eventDetailsTemplate(this._item);
  }
}
