import {menu} from './view/menu.js';
import {filter} from './view/filter.js';
import {sorting} from './view/sorting';
import {routeList} from './view/route-list';
import {routeItem} from './view/route-item';
import {routeItemCreate} from './view/route-item-create';
import {routeItemEdit} from './view/route-item-edit';
import {generateEvent, getRandomInteger, TYPES, CITIES} from './view/generate-mock';

const ROUTE_ITEM_COUNTER = getRandomInteger(15, 20);

const eventArray = new Array(ROUTE_ITEM_COUNTER).fill().map(generateEvent);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.trip-main');

const siteNavigationElement = siteMainElement.querySelector('.trip-controls__navigation');
render(siteNavigationElement, menu(), 'beforeend');

const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
render(siteFilterElement, filter(), 'beforeend');

const siteTripEvents = document.querySelector('.trip-events');
render(siteTripEvents, sorting(), 'beforeend');

render(siteTripEvents, routeList(), 'beforeend');

const siteTripEventsItem = document.querySelector('.trip-events__list');
for (let i = 0; i < ROUTE_ITEM_COUNTER; i++) {
  render(siteTripEventsItem, routeItem(eventArray[i]), 'beforeend');
}

render(siteTripEventsItem, routeItemCreate(generateEvent(), TYPES, CITIES), 'afterbegin');

render(siteTripEventsItem, routeItemEdit(generateEvent(), TYPES, CITIES), 'beforeend');
