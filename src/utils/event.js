import dayjs from 'dayjs';

export const dateDuration = (dateFrom, dateTo) => {
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
    } else { return '';}
  }).join('');
  return formatedDuration;
};
