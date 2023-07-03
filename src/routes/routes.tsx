import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import AuthRoutes from '@features/authentication/routes';

const Home = lazy(() => import('../pages/Home'));

const protectedRoutes: RouteObject[] = [
  AuthRoutes,
  {
    path: '/',
    element: <Home />
  }
];

export default protectedRoutes;
