import { Scalars } from '@types';

export type LoginRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ValidationError = {
  [key: string]: string;
};
