import { TokenResponse } from '@types';

export enum StorageKeys {
  ACCESS_TOKEN = 'token',
  REFRESH_TOKEN = 'refreshToken'
}

const getLocalStorageItem = (key: string) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item || '');
  } catch {
    return item;
  }
};

const setLocalStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : `${value}`
  );
};

const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

const clearAllLocalStorageItems = () => {
  localStorage.clear();
  window.location.reload();
};

const setMultipleLocalStorageItems = (
  dataItems: Array<{ key: string; value: string }>
) => {
  dataItems.forEach((item) => {
    setLocalStorageItem(item.key, item.value);
  });
};

const setTokensInStorage = ({ accessToken, refreshToken }: TokenResponse) => {
  setMultipleLocalStorageItems([
    { key: StorageKeys.ACCESS_TOKEN, value: accessToken },
    { key: StorageKeys.REFRESH_TOKEN, value: refreshToken }
  ]);
};

export {
  clearAllLocalStorageItems,
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
  setTokensInStorage
};
