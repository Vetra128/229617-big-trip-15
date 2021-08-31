import AbstractView from './abstract.js';

const createDestinationInfoTemplate = (info) => (!info.description && !info.photos) ? ''
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

export default class DestinationInfo extends AbstractView{
  constructor(info) {
    super();
    this._info = info;
  }

  getTemplate() {
    return createDestinationInfoTemplate(this._info);
  }
}
