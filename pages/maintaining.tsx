import {Box, Center, Text} from '@chakra-ui/core'
import { Fragment } from 'react';
import {AiFillSetting} from 'react-icons/ai'
import { css } from '@emotion/core'
export default function Maintaining(){
    return (
        <Fragment>
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
        </Fragment>
    );
}