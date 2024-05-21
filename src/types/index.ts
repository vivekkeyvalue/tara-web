export type Maybe<T> = T | null;

export type Error = any;

export type HTTPResponse<T> = Maybe<T | Error>;

export type Scalars = {
  ID: string;
  String: string;
  QueryString: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export * from './requests';
export * from './button';
export * from './authentication';
export * from './avatar';
export * from './profile-settings';
export * from './stepper';
export * from './tabs';
export * from './homework';
export * from './dropdown';
