import { authApi } from '@core/baseApi';
import { END_POINTS } from '@config';

import { LoginRequest, HTTPResponse } from '@types';

const extendedBaseQuery = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<HTTPResponse<null>, LoginRequest>({
      query: (credentials) => ({
        url: END_POINTS.AUTH.LOGIN,
        method: 'POST',
        body: credentials
      })
    })
  })
});
/* eslint-disable-next-line */
export const { useLoginMutation } = extendedBaseQuery;
