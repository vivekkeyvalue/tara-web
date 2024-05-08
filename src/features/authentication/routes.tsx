import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { AUTH } from '@constants/routes';
import AuthLayout from '@layouts/auth-layout/AuthLayout';

const LoginPage = lazy(() => import('./pages/login/Login'));

export const AuthRoutes: RouteObject = {
  children: [
    {
      element: <AuthLayout />,
      children: [{ path: AUTH.LOGIN, element: <LoginPage /> }]
    }
  ]
};

export default AuthRoutes;
