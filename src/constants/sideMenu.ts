import { ReactComponent as DashboardIcon } from '@assets/icons/dashboard.svg';
import { ReactComponent as HomeWorkIcon } from '@assets/icons/homework.svg';
import { DASHBOARD, HOMEWORK_MANAGEMENT } from './routes';

const MENU_ITEMS = [
  {
    id: 1,
    Icon: DashboardIcon,
    label: 'Dashboard',
    route: DASHBOARD.DASHBOARD
  },
  {
    id: 2,
    Icon: HomeWorkIcon,
    label: 'Manage Homework',
    route: HOMEWORK_MANAGEMENT.HOMEWORKS
  }
];

export default MENU_ITEMS;
