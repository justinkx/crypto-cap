export const chartColor = [
  '#AFB42B',
  '#FFC107',
  '#E040FB',
  '#C2185B',
  '#F44336',
  '#388E3C',
];

export const randomColor = () =>
  ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

export const pieColor = (index) => chartColor[index];
