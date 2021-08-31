import AbstractView from './abstract.js';

const createDestinationListTemplate = (cities) =>
  `<datalist id="destination-list-1">
            ${cities.map((item) =>
    (`<option value="${item}"></option>`)).join('')}
          </datalist>`;

export default class DestinationList extends AbstractView{
  constructor(cities) {
    super();
    this._cities = cities;
  }

  getTemplate() {
    return createDestinationListTemplate(this._cities);
  }
}
