import { useRoutes, RouteObject } from 'react-router-dom';
import TeacherRoutes from './routes';

const AppRoutes = () => {
  const routesConfig: RouteObject[] = TeacherRoutes;

  const Routes = useRoutes([...routesConfig]);

  return Routes;
};

export default AppRoutes;
