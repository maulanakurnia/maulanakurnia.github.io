<<<<<<< HEAD
import * as gtag from '../lib/gtag'
import { Router } from 'next/router'
import type { AppProps } from "next/app";
import { useEffect, useState } from 'react'
import AppLayout from 'components/layout/AppLayout'
=======
import type { AppProps } from "next/app";
import {useEffect, useState} from 'react'
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

>>>>>>> 1988e8ea2c246c5e5770bac08638483b5173bceb

function App({Component, pageProps }:AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
<<<<<<< HEAD
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
=======
    }, []);

  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        {mounted && <Component {...pageProps} />}
    </ChakraProvider>
>>>>>>> 1988e8ea2c246c5e5770bac08638483b5173bceb
  );
}

export default App;
