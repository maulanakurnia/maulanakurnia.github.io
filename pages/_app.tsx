import Head from "next/head";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { Router } from "next/router";
import { myGame } from "data/myGame";
import { projects } from "data/project";
import type { AppProps } from "next/app";
import { Header, Footer } from "organisms/index";
import { GlobalStyle, theme } from "templates/index";
import { ContentProvider } from "context/contentContext";
import { trackPageview } from "config/analytics/track-event";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/core";

Router.events.on("routeChangeComplete", (url) => {
  trackPageview(url);
});
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <ContentProvider myGame={myGame} myProject={projects}>
        <GlobalStyle />
        <Header />
        <Box as="main" className="main" minHeight="84vh">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ContentProvider>
    </ChakraProvider>
  );
}