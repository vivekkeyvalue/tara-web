import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { AuthLayout } from '@components';
import AUTH from '@constants/routes';

const LoginPage = lazy(() => import('./pages/login/login'));

export const AuthRoutes: RouteObject = {
  element: <AuthLayout />, // Outlet in AuthLayout will be replaced by matching element from below
  children: [{ path: AUTH.LOGIN, element: <LoginPage /> }]
};

export default AuthRoutes;
