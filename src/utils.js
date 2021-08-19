import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const ucFirst = (str) => {
  if (!str) {return str;}

  return str[0].toUpperCase() + str.slice(1);
};

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

export {getRandomInteger, ucFirst, dateDuration};
