import { Scalars } from '@types';

const noop = () => {};
export { noop };

export const getRandomId = (): Scalars['ID'] =>
  (Math.random() + 1).toString(36).substring(7);

export const validateWithRegexp = (regex: any, value?: string) =>
  regex.test(value);
