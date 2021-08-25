import {createElement} from '../utils';

const destinationListTemplate = (cities) =>
  `<datalist id="destination-list-1">
            ${cities.map((item) =>
    (`<option value="${item}"></option>`)).join('')}
          </datalist>`;

export default class DestinationList {
  constructor(cities) {
    this._element = null;
    this._cities = cities;
  }

  getTemplate() {
    return destinationListTemplate(this._cities);
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
