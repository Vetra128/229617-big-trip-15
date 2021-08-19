import dayjs from 'dayjs';

const dateDuration = (dateFrom, dateTo) => {
  const days = dayjs(dateTo).diff(dayjs(dateFrom), 'd');
  const hours = dayjs(dateTo).diff(dayjs(dateFrom), 'h');
  const minutes = dayjs(dateTo).diff(dayjs(dateFrom), 'm');

  const duration = {
    D: days,
    get H() {
      return hours - this.D * 24;
    },
    get M() {
      return minutes - this.D * 24 * 60 - this.H * 60;
    },
  };

  const formatedDuration = Object.entries(duration).map(([key, value]) => {
    if (value) {
      if (value < 10) {
        value = `0${value}`;
      }
      return `${value}${key} `;
    }
  }).join('');

  return formatedDuration;
};

const offersTemplate = (offers) =>
  !offers.filter((item) => item.isChecked)
    ? ''
    : `<h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
    ${offers.map(({ title, price, isChecked }) =>
    (isChecked ? `<li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>` : '')).join('')}
    </ul>`;

export const routeItem = (item) => {
  const duration = dateDuration(item.dateFrom, item.dateTo);
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${item.dateFrom.format('YYYY-MM-DD')}>${item.dateFrom.format('MMM-DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${item.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${item.destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime=${item.dateFrom.format('YYYY-MM-DDTHH:mm')}>${item.dateFrom.format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime=${item.dateTo.format('YYYY-MM-DDTHH:mm')}>${item.dateTo.format('HH:mm')}</time>
        </p>
        <p class="event__duration">${duration}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${item.basePrice}</span>
      </p>
      ${offersTemplate(item.offers)}
      <button class="event__favorite-btn  ${item.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};
