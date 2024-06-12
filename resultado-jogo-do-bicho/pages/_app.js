import { useEffect } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((_) => console.log('Service Worker registered'))
        .catch((err) => console.error('Service Worker registration failed', err));
    }
  }, []);

  return <Component {...pageProps} />;
}
