import { rest } from 'msw';
import { END_POINTS } from '@config';
import { userListMock } from '@mocks/entities/user';

export default [
  rest.post(`*${END_POINTS.AUTH.LOGIN}`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json(userListMock))
  )
];
