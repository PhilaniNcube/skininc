import { Fragment, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import analytics from '../utils/analytics';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
