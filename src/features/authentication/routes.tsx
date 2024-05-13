import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { AUTH } from '@constants/routes';
import TeacherAuthLayout from '@layouts/auth-layout/TeacherAuthLayout';

const LoginPage = lazy(() => import('./pages/login/Login'));

export const TeacherAuthRoutes: RouteObject = {
  children: [
    {
      element: <TeacherAuthLayout />,
      children: [{ path: AUTH.LOGIN, element: <LoginPage /> }]
    }
  ]
};

export default TeacherAuthRoutes;
