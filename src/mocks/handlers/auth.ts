import { rest } from 'msw';
import { END_POINTS } from '@config';

export default [
  rest.post(`*${END_POINTS.AUTH.LOGIN}`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ name: 'abc' }))
  )
];
