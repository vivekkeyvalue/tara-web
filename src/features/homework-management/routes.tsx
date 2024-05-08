import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { HOMEWORK_MANAGEMENT } from '@constants/routes';

const CreateHomeWork = lazy(
  () =>
    import('@features/homework-management/pages/create-homework/CreateHomeWork')
);

export const HomeworkManagementRoutes: RouteObject[] = [
  {
    path: HOMEWORK_MANAGEMENT.CREATE_HOMEWORK,
    element: <CreateHomeWork />
  }
];

export default HomeworkManagementRoutes;
