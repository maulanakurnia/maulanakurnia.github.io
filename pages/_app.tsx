import type { AppProps } from "next/app";
import {useEffect, useState} from 'react'
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";


function App({Component, pageProps }:AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        {mounted && <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default App;
