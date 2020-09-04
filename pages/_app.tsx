import type { AppProps } from "next/app";
import { AppLayout } from "templates/index";
import Maintaining from "./maintaining";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function App({ Component, pageProps }: AppProps) {
  const MAINTAINING = false;
  return !MAINTAINING ? (
    <AppLayout> {<Component {...pageProps} />} </AppLayout>
  ) : (
    <Maintaining />
  );
}

export default App;
