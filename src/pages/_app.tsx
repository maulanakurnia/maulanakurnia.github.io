import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { Router } from "next/router";
import type { AppProps } from "next/app";
import { AppLayout } from "templates/AppLayout";
import { trackPageview } from "config/analytics/track-event";

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
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
