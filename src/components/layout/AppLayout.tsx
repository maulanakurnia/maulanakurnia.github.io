import { ChakraProvider, CSSReset, Box } from '@chakra-ui/core'
import customeTheme from '../../../lib/theme'
import Header from './Header'

function AppLayout({ children, }) {
    return (
        <ChakraProvider theme={customeTheme}>
            <CSSReset />
            <Header/>
            <Box as='main' className='main'>
            {children}
            </Box>
        </ChakraProvider>
    )
}

export default AppLayout
