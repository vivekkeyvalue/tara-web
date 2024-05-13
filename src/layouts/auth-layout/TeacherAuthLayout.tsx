import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from '@components/spinner/Spinner';
import backgroundImage from '@assets/images/auth-background.svg';
import AuthLayoutImage from '@assets/images/auth_layout.svg';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const TeacherAuthLayout = () => (
  <div className="flex h-screen items-center" style={backgroundStyle}>
    <section className="relative flex size-full items-center justify-center bg-transparent align-middle sm:w-1/3 md:w-1/2">
      <img src={AuthLayoutImage} alt="login-layout-pic" />
    </section>
    <section className="flex w-full items-center justify-center bg-transparent p-10 sm:w-2/3 md:w-1/2">
      <div className="m-6 flex flex-col items-center  justify-center rounded-lg bg-white px-22 py-16 md:min-w-520 md:max-w-520">
        <Suspense
          fallback={
            <div className="flex size-full items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </section>
  </div>
);

export default TeacherAuthLayout;
