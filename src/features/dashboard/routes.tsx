import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { DASHBOARD } from '@constants/routes';

const Dashboard = lazy(
  () => import('@features/dashboard/pages/dashboard/Dashboard')
);

export const DashboardRoutes: RouteObject[] = [
  {
    path: DASHBOARD.DASHBOARD,
    element: <Dashboard />
  }
];

export default DashboardRoutes;
