import { Box, Link, Button, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/core";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";
import ActiveLink from '../utils/Active-link';

const MenuItems = ({ children, to }: any) => {
  return (
    <ActiveLink href={to}>
      <Link 
        userSelect="none"
        px={[0,2]} py={[1,0]} 
        fontWeight="500"
        fontSize={15} 
        display={["block", "flex"]} 
        borderTopWidth={["1px", "0"]}>
        {children}
      </Link>
    </ActiveLink>
  );
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', '#121212');
    const color = useColorModeValue('#363537', '#929497');
    const boxShadow = useColorModeValue('#000', '#fff');
    return ( 
        <Box // Header
            as="header"
            bg={bgColor}
            color={color}
            w="100%"
            p={2}
            px={5}
            position="fixed"
            zIndex={999}
            boxShadow={"0px -20px 27px" + boxShadow}>
            <Box // Header Content
                display="flex"
                flexDirection={["column","row"]}
                justifyContent="space-between">
                <Box // Brand & Button
                    display="flex" 
                    justifyContent="space-between"
                    w={["full","auto"]}>
                    <Box>
                        {/* Brand */}
                        <Link fontWeight="600" href="/" fontSize={15}>mufradmabni</Link>
                    </Box>
                    <Box
                        display={["flex","none"]}>
                        {/* Humberger */}
                        <Button
                            size="xs"
                            variant="ghost"
                            onClick={toggleColorMode}
                            _focus={{outline: 0}}
                            fontSize={14}>
                            {colorMode === "light" ? <FiSun color="#000"/> : <FiMoon />}
                        </Button>
                        <Button
                            size="xs"
                            variant="ghost"
                            _focus={{outline: 0}}
                            fontSize={14}>
                            {<FiSearch/>}
                        </Button>
                        <Button
                            size="xs"
                            variant="ghost"
                            onClick={() => setOpen(!open)}
                            _focus={{outline: 0}}
                            fontSize={14}>
                            {open ? <RiCloseLine /> : <RiMenuLine />}
                        </Button>
                    </Box>
                </Box>
                    <Box // Content
                        display={[open ? "flex" : "none", "flex"]}
                        justifyContent="space-between"
                        w="full"> 
                        <Box 
                            py={[3,0]}
                            display="flex"
                            flexDirection={["column","row"]}
                            justifyItems="center"
                            w="full">
                            <MenuItems to='/'>Home</MenuItems>
                            <MenuItems to='/blog'>Blog</MenuItems>
                            <MenuItems to='/project'>Project</MenuItems>
                        </Box>

                        <Box> {/* Toggle Theme */}
                            <IconButton
                                display={["none", "flex"]}
                                aria-label="toggle mode"
                                size="xs"
                                icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
                                onClick={toggleColorMode}
                                variant="ghost"/>
                        </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
