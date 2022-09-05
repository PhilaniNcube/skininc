import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import analytics from '../utils/analytics';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />{" "}

      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
