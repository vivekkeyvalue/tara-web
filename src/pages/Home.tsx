/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { useEffect } from 'react';

const Home = () => {
  // TOD: to enable dark mode
  // useEffect(() => {
  //   document.documentElement.setAttribute('theme', 'dark');
  // });

  return (
    <div className="flex h-14 items-center justify-center bg-bkg text-3xl font-bold text-content">
      Welcome to Cofee Web
    </div>
  );
};
export default Home;
