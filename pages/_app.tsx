import * as gtag from '../lib/gtag'
import { Router } from 'next/router'
import type { AppProps } from "next/app";
import { useEffect, useState } from 'react'
import AppLayout from 'components/layout/AppLayout'

function App({Component, pageProps }:AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      Router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, []);

  return (
        <AppLayout>
            {mounted && <Component {...pageProps} />}
        </AppLayout>
  );
}

export default App;
