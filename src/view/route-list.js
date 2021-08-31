import AbstractView from './abstract.js';

const createRouteListTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class RouteList extends AbstractView{
  getTemplate() {
    return createRouteListTemplate();
  }
}
