import {Box, Center, Text, ChakraProvider, CSSReset} from '@chakra-ui/core'
import {AiFillSetting} from 'react-icons/ai'
import { css } from '@emotion/core'
import customTheme from 'components/lib/theme';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'src/components/';
export default function Maintaining(){
    return (
        <ChakraProvider theme={customTheme}>
            <CSSReset />
            <Helmet>
                <link href="http://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" type="text/css"/> 
            </Helmet>
            <GlobalStyle/>
            <Center height="100vh">
                <Box position="absolute" top="40%" textAlign="center" justifyContent="center" width="100%" css={css`
                    &>svg {
                        display: inline;
                        animation: svg infinite 10s linear;
                    }
                    @keyframes svg{
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}>
                    <AiFillSetting size="50px"/>
                    <Text as="h1" fontSize="20px" fontWeight="700">MAINTAINING</Text>
                    <Text>We'r working hard to bring New Version</Text>
                </Box>
            </Center>
        </ChakraProvider>
    );
}