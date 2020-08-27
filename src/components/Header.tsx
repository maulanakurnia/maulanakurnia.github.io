import { Box, Link, Button } from '@chakra-ui/core'
import { RiMenuLine, RiCloseLine } from "react-icons/ri"
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Dynamic Theme
    useEffect(() => {
        const darkModeValue = localStorage.getItem('DARK_MODE')
        setTheme(darkModeValue === 'true')
        setMounted(true)
    }, []);

    
    useEffect(() => {
        localStorage.setItem('DARK_MODE', String(theme))
    }, [theme])

    if (!mounted) return <div />

    const toggleTheme = () => {
        setTheme(!theme);
    }
    return(
        <Box as="header" bg="#121212" w="100%" color="white" p={2} position="fixed" zIndex={999} mb={30}>
            <Box display={{md: 'flex'}} w="100%">
                <Box display="flex" justifyContent="space-between" px={1}>
                    <Box>
                        <Link href="/">mufradmabni</Link>
                    </Box>
                    <Box my="auto" display={{md:'none'}}>
                        <Button size="xs" variant="ghost" onClick={() => setOpen(!open)} cursor="pointer">
                            {open ? <RiMenuLine/> : <RiCloseLine/>}
                        </Button>
                    </Box>
                </Box>
                <Box display={open ? 'none' : 'flex'} justifyContent="space-between" w="100%">
                    <Box display={{sm: 'block', md: 'flex'}} px={1}>
                        <Link display="block" px={2} href="/">Beranda</Link>
                        <Link display="block" px={2} href="/[person]/[vehicle]">Blog</Link>
                    </Box>
                    <Box display={{xs:'none', md: 'block'}}>
                        <Button size="xs" variant="ghost" cursor="pointer" onClick={toggleTheme}>
                            {open ? <FiSun/> : <FiMoon/>}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}