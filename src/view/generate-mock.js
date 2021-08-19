import dayjs from 'dayjs';
import {TYPES, CITIES, FILTERS, MENU, SORT_LIST} from '../const';
import {getRandomInteger} from '../utils';

const generateDate = () => {

  const maxDaysGap = 7;
  const maxHoursGap = 23;
  const maxMinutesGap = 59;
  const daysGap = getRandomInteger(0, maxDaysGap);
  const hoursGap = getRandomInteger(0, maxHoursGap);
  const minutesGap = getRandomInteger(0, maxMinutesGap);
  return dayjs().add(daysGap, 'day').add(hoursGap, 'hour').add(minutesGap, 'minute');
};

const getRandomType = () => {
  const randomIndex = getRandomInteger(0, TYPES.length - 1);

  return TYPES[randomIndex];
};

const getRandomDestination = () => {
  const randomIndex = getRandomInteger(0, CITIES.length - 1);

  return CITIES[randomIndex];
};

const OFFERS_TITLES = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];
const getRandomOffer = () => OFFERS_TITLES.map((item) => ({
  title: item,
  price: getRandomInteger(0, 1000),
  isChecked: Boolean(getRandomInteger(0, 1)),
}));

const getRandomAllOffers = () => TYPES.map((type) => ({
  type: type,
  offers: getRandomOffer(),
}));

const getRandomOffers = (currentType) => getRandomAllOffers().find(({ type }) => type === currentType).offers;

const getDescription = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const textArray = text.split('.').slice(0, -1);
  const shuffled = textArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(1, getRandomInteger(0, shuffled.length - 1));
};

const getPhoto = (num) => ({
  url: `http://picsum.photos/248/152?r=${num}`,
  alt: `img ${num}`,
});

const getPhotos = () => {
  const num = getRandomInteger(1, 5);
  const tenpSet = new Set(Array(num).fill().map(() => Math.round(Math.random() * num)));
  return [...tenpSet].map((item) => getPhoto(item));
};

const MIN_PRICE = 5;
const MAX_PRICE = 1000;

const generateEvent = () => {
  let date1 = generateDate();
  let date2 = generateDate();
  if (date2.isBefore(date1)) {
    if (date2.isBefore(date1)) {
      [date1, date2] = [date2, date1];
    }
  }
  const type = getRandomType();
  return {
    basePrice: getRandomInteger(MIN_PRICE, MAX_PRICE),
    dateFrom: date1,
    dateTo: date2,
    destination: getRandomDestination(),
    destinationInfo: {
      description: getDescription(),
      photos: getPhotos(),
    },
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: getRandomOffers(type),
    type: type,
  };
};

const getCurrentFilter = () => FILTERS[getRandomInteger(0, FILTERS.length - 1)];
const getCurrentSort = () => {
  const stateArray = ['', 'checked', 'disabled'];
  return SORT_LIST.map((item) => ({
    title: item,
    state: stateArray[getRandomInteger(0, stateArray.length - 1)],
  }));
};
const getCurrentMenuItem = () => MENU[getRandomInteger(0, MENU.length - 1)];

const getAppState = () => ({
  filter: getCurrentFilter(),
  sort: getCurrentSort(),
  menu: getCurrentMenuItem(),
});

export {generateEvent, getAppState};
