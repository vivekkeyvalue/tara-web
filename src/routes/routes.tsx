import { Navigate, RouteObject } from 'react-router-dom';

import AuthRoutes from '@features/authentication/routes';
import { HOME, HOMEWORK_MANAGEMENT } from '@constants/routes';
import MainLayout from '@layouts/main-layout/MainLayout';
import HomeworkManagementRoutes from '@features/homework-management/routes';

const protectedRoutes: RouteObject[] = [
  AuthRoutes,
  {
    path: HOME.HOME,
    element: <Navigate to={HOMEWORK_MANAGEMENT.CREATE_HOMEWORK} /> // Re-route from '/' to '/order-management/orders'
  },
  {
    element: <MainLayout />, // Outlet in MainLayout will be replaced by matching element from below
    children: [...HomeworkManagementRoutes]
  }
];

export default protectedRoutes;
