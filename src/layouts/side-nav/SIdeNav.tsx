import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Avatar, SidebarItem } from '@components';
import MENU_ITEMS from '@constants/sideMenu';
import Logo from '@assets/images/logo-black.svg';
import LogoLetter from '@assets/images/logo-letter.svg';
import LogoutIcon from '@assets/icons/logout.svg';
import { AUTH } from '@constants/routes';

const SideNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSidebarOpen, setSideBarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setSideBarOpen(true);
  };

  const closeSidebar = () => {
    setSideBarOpen(false);
  };

  const onClickLogout = () => {
    // TODO: clear token
    navigate(AUTH.LOGIN);
  };

  return (
    <div
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen flex-col justify-between bg-theme shadow-sm transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-270' : 'w-72'
      }`}
    >
      <div>
        <div className="h-12 px-6 pb-6 pt-8">
          <img
            src={Logo}
            alt="CoFee logo"
            className={`${isSidebarOpen ? '' : 'hidden'}`}
          />
          <img
            src={LogoLetter}
            alt="CoFee"
            className={`${
              isSidebarOpen ? 'hidden' : 'ml-1 flex items-center justify-center'
            }`}
          />
        </div>
        <div className="mt-6 flex flex-col gap-3 py-3">
          {MENU_ITEMS.map((item: any) => {
            const { route } = item;
            const isCurrentRoute = location.pathname.startsWith(route);
            const path = route;

            return (
              <SidebarItem
                key={item.label}
                item={item}
                path={path}
                isCurrentRoute={isCurrentRoute}
                isSidebarOpen={isSidebarOpen}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`relative ${
          isSidebarOpen ? 'border-t-1 border-grey40' : ''
        }`}
      >
        <div
          className={`flex	items-center transition-all  ${
            isSidebarOpen ? 'justify-between' : 'justify-center'
          } bg-bgGrey gap-3 px-4 py-5`}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <Avatar
              name="Test User"
              className="size-10 min-w-10 !border-0 text-theme"
            />
            <div
              className={`${
                isSidebarOpen ? '' : 'hidden'
              } flex justify-between`}
            >
              <div
                className={`flex w-[177px] flex-col justify-center truncate  break-words pt-1 `}
              >
                <div className="overflow-hidden text-ellipsis text-sm font-medium">
                  Test User
                </div>
                <div className="overflow-hidden text-ellipsis text-xs font-medium text-grey">
                  testuser@gmail.com
                </div>
              </div>
              <div
                className="flex cursor-pointer items-center justify-center"
                role="presentation"
                onClick={onClickLogout}
              >
                <img src={LogoutIcon} alt="logout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideNavBar;
