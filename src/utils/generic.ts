import { Scalars } from '@types';

export const getRandomId = (): Scalars['ID'] =>
  (Math.random() + 1).toString(36).substring(7);

export const validateWithRegexp = (regex: any, value?: string) =>
  regex.test(value);

export const sanitizeNumberInput = (input: string) =>
  input.replace(/[^0-9]/g, '');

export const getRandomColor = (index?: number) => {
  const colorsArray = [
    '#CBE4F9',
    '#CDF5F6',
    '#EFF9DA',
    '#D6CDEA',
    '#F9D8D6',
    '#EBFFE4'
  ];

  const colorIndex =
    (index || Math.floor(Math.random() * colorsArray.length)) %
    colorsArray.length;

  return colorsArray[colorIndex];
};

export const getFirstLetters = (str: string) =>
  str
    ?.split(' ')
    .map((word) => word[0])
    .filter((_, index) => index < 2)
    .join('')
    .toUpperCase();
