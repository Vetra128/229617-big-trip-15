import AbstractView from './abstract.js';

const routeListTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class RouteList extends AbstractView{
  getTemplate() {
    return routeListTemplate();
  }
}
