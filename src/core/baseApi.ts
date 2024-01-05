import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/dist/query/react';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { Mutex } from 'async-mutex';

import { API_URL, END_POINTS } from '@config';
import {
  clearAllLocalStorageItems,
  getLocalStorageItem,
  setTokensInStorage,
  StorageKeys
} from '@utils/storage';
import { TokenResponse } from '@types';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URL}`,
  prepareHeaders: (headers) => {
    const token = getLocalStorageItem(StorageKeys.ACCESS_TOKEN);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          END_POINTS.AUTH.REFRESH,
          api,
          extraOptions
        );
        if (refreshResult.data) {
          setTokensInStorage(refreshResult.data as TokenResponse);
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          clearAllLocalStorageItems();
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

// eslint-disable-next-line import/prefer-default-export
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false
});
