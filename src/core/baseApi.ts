import {
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { API_URL } from '@config';

const fetchQ = fetchBaseQuery({
  baseUrl: `${API_URL}/`,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: 'include'
});

const authQuery: any = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await fetchQ(args, api, extraOptions);
  return result;
};

// eslint-disable-next-line import/prefer-default-export
export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: authQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false
});
