import { useLocation } from 'react-router-dom';

import { SidebarItem } from '@components';
import MENU_ITEMS from '@constants/sideMenu';

const SideNavBar = () => {
  const location = useLocation();
  return (
    <div className="absolute left-0 top-16.5 z-50 h-[calc(100vh-66px)] min-w-257 bg-theme shadow-sm">
      <div className="mt-6 flex flex-col gap-3 py-3">
        {MENU_ITEMS.map((item: any) => {
          const { route } = item;
          const isCurrentRoute = location.pathname.startsWith(route);
          const path = route;

          return (
            <SidebarItem
              item={item}
              path={path}
              isCurrentRoute={isCurrentRoute}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SideNavBar;
