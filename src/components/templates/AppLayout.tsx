import { ChakraProvider, CSSReset, Box } from '@chakra-ui/core'
import Header from '../organisms/header'
import {GlobalStyle, theme } from 'templates/index'
import Helmet from 'react-helmet'
import Footer from '../organisms/footer';
import { Router } from 'next/router'
import { trackPageview } from "src/config/analytics/track-event";

Router.events.on("routeChangeComplete", (url) => {
    trackPageview(url)
})

const AppLayout = ({ children }:any) => {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" type="text/css"/> 
            </Helmet>
            <GlobalStyle/>
            <Header/>
            <Box as='main' className='main'>
            {children}
            </Box>
            <Footer/>
        </ChakraProvider>
    )
}

export default AppLayout
