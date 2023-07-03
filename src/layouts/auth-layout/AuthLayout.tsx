import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as AppLogo } from '@assets/logo/logo_full_dark.svg';
import AuthLayoutImage from '@assets/images/auth_layout.svg';
import { Spinner } from '@components';

const AuthLayout = () => (
  <div className="flex h-screen items-center">
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <section className="flex h-full justify-center bg-primary10 align-middle sm:w-1/3 md:w-1/2">
        <img src={AuthLayoutImage} alt="login-layout-pic" className="w-2/3" />
      </section>
      <section className="flex w-full items-center justify-center sm:w-2/3 md:w-1/2">
        <div className="m-6 flex w-[424px] flex-col items-center justify-start">
          <div className="mb-10 flex w-full items-center justify-start">
            <AppLogo className="flex h-9 items-center justify-start" />
          </div>
          <Outlet />
        </div>
      </section>
    </Suspense>
  </div>
);

export default AuthLayout;
