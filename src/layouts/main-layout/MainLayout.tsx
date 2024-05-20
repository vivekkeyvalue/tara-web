import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Spinner } from '@components';
import SideNavBar from '@layouts/side-nav/SIdeNav';

const MainLayout = () => (
  <div className="flex h-screen w-screen overflow-hidden">
    <div className="size-full">
      <SideNavBar />
      <div className="pb-83 h-screen overflow-y-auto bg-primaryLite">
        <div className="wrapper">
          <Suspense
            fallback={
              <div className="absolute top-1/2 flex size-full -translate-y-1/2 items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
);

export default MainLayout;
