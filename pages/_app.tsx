import type { AppProps } from "next/app";
import { useEffect, useState } from 'react'
import { useColorMode } from '@chakra-ui/core';
import { AppLayout } from 'src/components/';
import Maintaining from "./maintaining";

function App({Component, pageProps }:AppProps) {
    const [mounted, setMounted] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    var MAINTAINING: boolean = false;
    useEffect(() => {
        const darkModeValue = localStorage.getItem('chakra-ui-color-mode')
        // @ts-ignore
        toggleColorMode(darkModeValue)
        setMounted(true);
    }, [])

    useEffect(() => {
        localStorage.setItem('chakra-ui-', colorMode)
    }, [colorMode])
    if (!mounted) return <div />

    return (
        !MAINTAINING ? 
        <AppLayout> {mounted && <Component {...pageProps} />} </AppLayout>
        :
        <Maintaining/>
    );
}

export default App;
