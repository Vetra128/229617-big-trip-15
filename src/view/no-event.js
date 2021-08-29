import AbstractView from './abstract.js';

const createNoTaskTemplate = () => (
  `<p class="trip-events__msg">
Click New Event to create your first point
</p>`
);

export default class NoEvent extends AbstractView{
  getTemplate() {
    return createNoTaskTemplate();
  }
}
