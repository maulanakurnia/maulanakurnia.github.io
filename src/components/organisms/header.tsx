import { Box, Link, Button, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/core";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";
import { ActiveLink } from 'atoms/index';

const MenuItems = ({ children, to }: any) => {
  return (
    <ActiveLink href={to}>
      <Link 
        userSelect="none"
        px={[0,2]} py={[1,0]} 
        fontWeight="500"
        fontSize={15} 
        display={["block", "flex"]} 
        my="auto"
        borderTopWidth={["1px", "0"]}
        transition="all 0.2s"
        borderRadius={{xs: '0px', md:'6px'}}
        className="css-xhsysdk"
        _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.100") }}>
        {children}
      </Link>
    </ActiveLink>
  );
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    return ( 
        <Box // Header
            as="header"
            w="100%"
            p={2}
            px={5}
            position="fixed"
            zIndex={999}>
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
                        <Link fontWeight="600" href="/" fontSize={15} pr={3}>mufradmabni</Link>
                    </Box>
                    <Box
                        display={["flex","none"]}>
                        {/* Humberger */}
                        <Button
                            size="xs"
                            variant="ghost"
                            onClick={toggleColorMode}
                            _focus={{outline: 0}}
                            fontSize={14}
                            className="customIcon">
                            {colorMode === "light" ? <FiSun/> : <FiMoon />}
                        </Button>
                        <Button
                            size="xs"
                            variant="ghost"
                            _focus={{outline: 0}}
                            fontSize={14}
                            className="customIcon">
                            {<FiSearch/>}
                        </Button>
                        <Button
                            size="xs"
                            variant="ghost"
                            onClick={() => setOpen(!open)}
                            _focus={{outline: 0}}
                            fontSize={14}
                            className="customIcon">
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
                                className="customIcon"
                                icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
                                onClick={toggleColorMode}
                                _focus={{outline: 'none'}}
                                variant="ghost"/>
                        </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
