import { Navigate, RouteObject } from 'react-router-dom';

import { HOME, HOMEWORK_MANAGEMENT } from '@constants/routes';
import MainLayout from '@layouts/main-layout/MainLayout';
import HomeworkManagementRoutes from '@features/homework-management/routes';
import DashboardRoutes from '@features/dashboard/routes';
import TeacherAuthRoutes from '@features/authentication/routes';

const TeacherRoutes: RouteObject[] = [
  TeacherAuthRoutes,
  {
    path: HOME.HOME,
    element: <Navigate to={HOMEWORK_MANAGEMENT.CREATE_HOMEWORK} /> // Re-route from '/' to '/order-management/orders'
  },
  {
    element: <MainLayout />, // Outlet in MainLayout will be replaced by matching element from below
    children: [...HomeworkManagementRoutes, ...DashboardRoutes]
  }
];

export default TeacherRoutes;
