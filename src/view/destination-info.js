import {createElement} from '../utils';

const destinationInfoTemplate = (info) => (!info.description && !info.photos) ? ''
  : `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${info.description.join(' ')}</p>
           ${(!info.photos || (!info.photos.length)) ? ''
    :`<div class="event__photos-container">
             <div class="event__photos-tape">
             ${info.photos.map((item) => (`<img class="event__photo" src="${item.url}" alt="${item.alt}">`)).join('')}
             </div>
           </div>`}
         </section>
       </section>`;

export default class DestinationInfo {
  constructor(info) {
    this._element = null;
    this._info = info;
  }

  getTemplate() {
    return destinationInfoTemplate(this._info);
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
