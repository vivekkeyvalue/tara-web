import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }
];

export default protectedRoutes;
