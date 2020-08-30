import type { AppProps } from "next/app";
import { AppLayout } from 'templates/index';
import Maintaining from "./maintaining";

function App({Component, pageProps }:AppProps) {
    var MAINTAINING: boolean = false;
    return (
        !MAINTAINING ? 
        <AppLayout> { <Component {...pageProps} />} </AppLayout>
        :
        <Maintaining/>
    );
}

export default App;
