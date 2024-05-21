import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { HOMEWORK_MANAGEMENT } from '@constants/routes';

const Homeworks = lazy(
  () => import('@features/homework-management/pages/homeworks/Homeworks')
);

const Preview = lazy(
  () => import('@features/homework-management/pages/preview/Preview')
);

export const HomeworkManagementRoutes: RouteObject[] = [
  {
    path: HOMEWORK_MANAGEMENT.HOMEWORKS,
    element: <Homeworks />
  },
  {
    path: HOMEWORK_MANAGEMENT.PREVIEW,
    element: <Preview />
  }
];

export default HomeworkManagementRoutes;
