import MenuView from './view/menu.js';
import FilterView from './view/filter.js';
import SortingView from './view/sorting';
import RouteListView from './view/route-list';
import RouteItemView from './view/route-item';
import RouteItemEditView from './view/route-item-edit';
import NoEventView from './view/no-event';
import {generateEvent, getAppState} from './view/generate-mock';
import {EVENT_TYPES, CITIES, FILTERS, MENU} from './const';
import {render, RenderPosition} from './utils/render';
import {getRandomInteger} from './utils/common';

const ROUTE_ITEM_COUNTER = getRandomInteger(15, 20);

const events = new Array(ROUTE_ITEM_COUNTER).fill().map(generateEvent);

const appState = getAppState();

const siteMainElement = document.querySelector('.trip-main');

const siteNavigationElement = siteMainElement.querySelector('.trip-controls__navigation');

const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');
const siteTripEvents = document.querySelector('.trip-events');

const renderRouteBoard = (boardContainer, routes) => {
  const routeList = new RouteListView();
  render(boardContainer, new SortingView(appState.sort).getElement(), RenderPosition.BEFOREEND);
  render(boardContainer, routeList.getElement(), RenderPosition.BEFOREEND);

  const renderEvent = (event) => {
    const routeItemComponent = new RouteItemView(event);
    const routeItemEditComponent = new RouteItemEditView(generateEvent(), EVENT_TYPES, CITIES);

    const replaceItemToForm = () => {
      routeList.getElement().replaceChild(routeItemEditComponent.getElement(), routeItemComponent.getElement());
    };
    const replaceFormToItem = () => {
      routeList.getElement().replaceChild(routeItemComponent.getElement(), routeItemEditComponent.getElement());
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToItem();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    render(routeList.getElement(), routeItemComponent.getElement(), RenderPosition.BEFOREEND);

    routeItemComponent.setRollDownBtnClickHandler(() => {
      replaceItemToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    routeItemEditComponent.setRollUpBtnClickHandler(() => {
      replaceFormToItem();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    routeItemEditComponent.setFormSubmitClickHandler(() => {
      replaceFormToItem();
      document.removeEventListener('keydown', onEscKeyDown);
    });
  };
  for (const val of routes) {
    renderEvent(val);
  }
};
render(siteFilterElement, new FilterView(appState.filter, FILTERS).getElement(), RenderPosition.BEFOREEND);
render(siteNavigationElement, new MenuView(appState.menu, MENU).getElement(), RenderPosition.BEFOREEND);

if (events.length === 0) {
  render(siteTripEvents, new NoEventView().getElement(), RenderPosition.BEFOREEND);
} else {
  renderRouteBoard(siteTripEvents, events);
}
