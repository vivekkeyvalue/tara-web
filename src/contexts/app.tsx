import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { store } from '../core/store';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <Provider store={store}>
    <HelmetProvider>
      <Router>{children}</Router>
    </HelmetProvider>
  </Provider>
);

export default AppProvider;
