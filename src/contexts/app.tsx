import { Provider } from 'react-redux';
import { store } from '../core/store';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactNode } from 'react';

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
