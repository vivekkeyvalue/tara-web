import { ReactComponent as DashboardIcon } from '@assets/icons/dashboard.svg';
import { ReactComponent as HomeWorkIcon } from '@assets/icons/homework.svg';
import { HOMEWORK_MANAGEMENT } from './routes';

const MENU_ITEMS = [
  {
    id: 1,
    Icon: DashboardIcon,
    label: 'Dashboard',
    route: 'dfsfd'
  },
  {
    id: 2,
    Icon: HomeWorkIcon,
    label: 'Manage Homework',
    route: HOMEWORK_MANAGEMENT.CREATE_HOMEWORK
  }
];

export default MENU_ITEMS;
