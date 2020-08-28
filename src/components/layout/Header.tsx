import { Box, Link, Button, useColorMode, IconButton } from "@chakra-ui/core";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import NextLink from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import ActiveLink from '../utils/Active-link';

const MenuItems = ({ children, to }: any) => {
  return (
    <ActiveLink href={to}>
      <Link px={10} color="gray.500">
        {children}
      </Link>
    </ActiveLink>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "white", dark: "#121212" };
  const color = { light: "#363537", dark: "#929497" };

  return (
    <Box
      as="header"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      w="100%"
      p={10}
      px={30}
      position="fixed"
      zIndex={999}
      mb={30}
      boxShadow="0px -20px 27px #000"
      borderBottomWidth="1px"
    >
      <Box display="flex" w="100%" flexDirection={["column", "row"]}>
        <Box
          display="flex"
          flexDirection={{ xs: "row" }}
          justifyContent="space-between"
          px={1}
          w={{ sm: "100%", md: "" }}
        >
          <Box>
            <NextLink href="/">mufradmabni</NextLink>
          </Box>
          <Box my="auto" display={["flex", "none"]}>
            <IconButton
              pr={10}
              display={["flex", "none"]}
              aria-label="toggle mode"
              size="xs"
              icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
            <Button
              size="xs"
              variant="ghost"
              onClick={() => setOpen(!open)}
              cursor="pointer"
            >
              {open ? <RiCloseLine /> : <RiMenuLine />}
            </Button>
          </Box>
        </Box>
        <Box
          display={[open ? "flex" : "none", "flex"]}
          justifyContent="space-between"
          w="100%"
        >
          <Box px={1} display={["block", "flex"]}>
            <MenuItems to='/'>Home</MenuItems>
            <MenuItems to='/blog'>Blog</MenuItems>
          </Box>
          <Box display={{ sx: "none", md: "block" }} my={4}>
            <IconButton
              display={["none", "block"]}
              aria-label="toggle mode"
              size="xs"
              icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
