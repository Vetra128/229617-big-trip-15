import {createElement, firstLitUpperCase} from '../utils';

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

export default class EventType {
  constructor(currentType, types) {
    this._element = null;
    this._currentType = currentType;
    this._types = types;
  }

  getTemplate() {
    return eventTypeTemplate(this._currentType, this._types);
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
