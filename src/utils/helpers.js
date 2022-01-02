/* eslint-disable no-bitwise */

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

export function NumbFormat(options) {
  const {
    number,
    billion = {
      decimal: 1,
      unit: 'b',
    },
    million = {
      decimal: 1,
      unit: 'm',
    },
    thousand = {
      decimal: 1,
      unit: 'k',
    },
  } = options;
  const _number = Math.abs(Number(number));

  // Nine zeros for Billions
  if (Number(_number) >= 1.0e9) {
    return (_number / 1.0e9).toFixed(billion.decimal) + ` ${billion.unit}`;
  }

  // Six zeros for Millions
  if (Number(_number) >= 1.0e6) {
    return (_number / 1.0e6).toFixed(million.decimal) + ` ${million.unit}`;
  }

  // Thrhee zeros for Thousands
  if (Number(_number) >= 1.0e3) {
    return (_number / 1.0e3).toFixed(thousand.decimal) + ` ${thousand.unit}`;
  }

  return _number;
}

export const parseCandles = (candles) => {};
