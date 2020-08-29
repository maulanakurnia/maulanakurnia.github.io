import {initGA, logPageView} from '../lib/analytics'
import { Router } from 'next/router'
import type { AppProps } from "next/app";
import { useEffect, useState } from 'react'
import AppLayout from 'components/layout/AppLayout'

function App({Component, pageProps }:AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      initGA()
      logPageView()
      Router.events.on('routeChangeComplete', logPageView);
    }, []);

  return (
        <AppLayout>
            {mounted && <Component {...pageProps} />}
        </AppLayout>
  );
}

export default App;
