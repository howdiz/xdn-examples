import '../styles/globals.css';
import '../styles/tailwind.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
  }, []);

  return (
    <>
      {loading && <LoadingIndicator />}
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
