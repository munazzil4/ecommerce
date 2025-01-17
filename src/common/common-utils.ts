import type { Nil } from './common-types';

export const APP_URL = 'https://ecommerce-seven-inky.vercel.app/';
export const APP_TITLE = 'Munazzil-ecommerce';
export const APP_DESCRIPTION = `${APP_TITLE} is a simple fullstack e-commerce website demo built with Next.js`;
export const APP_REPOSITORY_URL = 'https://github.com/munazzil4/ecommerce';

export const createMockArray = (length: number) => {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(Array.from({ length }).keys());
};

export const isNil = (value: unknown): value is Nil => {
  return value === null || value === undefined;
};
