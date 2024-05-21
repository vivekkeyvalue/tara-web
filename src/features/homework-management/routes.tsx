import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { HOMEWORK_MANAGEMENT } from '@constants/routes';

const Homeworks = lazy(
  () => import('@features/homework-management/pages/homeworks/Homeworks')
);

export const HomeworkManagementRoutes: RouteObject[] = [
  {
    path: HOMEWORK_MANAGEMENT.HOMEWORKS,
    element: <Homeworks />
  }
];

export default HomeworkManagementRoutes;
