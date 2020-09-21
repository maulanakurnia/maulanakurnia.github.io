import {
  Box,
  Link,
  Button,
  useColorMode,
  IconButton,
  useColorModeValue,
  Container,
  Text,
} from "@chakra-ui/core";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ActiveLink } from "atoms/index";
import NextLink from "next/link";
import header from "data/header";

const MenuItems = ({ children, to }: any) => {
  return (
    <ActiveLink href={to}>
      <Link
        _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.100") }}
        borderRadius={{ xs: "0px", md: "6px" }}
        borderTopWidth={["1px", "0"]}
        className="css-xhsysdk"
        display={["block", "flex"]}
        fontSize={15}
        fontWeight="500"
        my="auto"
        px={[0, 2]}
        py={[1, 0]}
        transition="all 0.2s"
        userSelect="none"
      >
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
      bg={useColorModeValue("rgba(255,255,255,0.95)", "rgba(17, 18, 22,0.95)")}
      p={2}
      position="fixed"
      px={5}
      w="100%"
      zIndex={999}
    >
      {header.routes.map((data, index) => (
        <Container maxW="xl" px={{ xs: "0", md: "1em" }} key={index}>
          <Box // Header Content
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent="space-between"
          >
            <Box // Brand & Button
              display="flex"
              justifyContent="space-between"
              w={["full", "auto"]}
            >
              <Box>
                {/* Brand */}
                <NextLink href="/">
                  <Text
                    _hover={{ cursor: "pointer" }}
                    as="span"
                    fontSize={15}
                    fontWeight="600"
                  >
                    {data.title}
                  </Text>
                </NextLink>
              </Box>
              <Box display={["flex", "none"]}>
                {/* Humberger */}
                <IconButton
                  _focus={{ outline: "none" }}
                  aria-label="toggle mode"
                  className="customIcon"
                  icon={
                    colorMode === "light" ? (
                      <FiSun fill="#000" />
                    ) : (
                      <FiMoon fill="#fff" />
                    )
                  }
                  onClick={toggleColorMode}
                  size="xs"
                  variant="ghost"
                />
                <Button
                  _focus={{ outline: 0 }}
                  className="customIcon"
                  fontSize={14}
                  onClick={() => setOpen(!open)}
                  size="xs"
                  variant="ghost"
                >
                  {open ? <RiCloseLine /> : <RiMenuLine />}
                </Button>
              </Box>
            </Box>
            <Box // Content
              display={[open ? "flex" : "none", "flex"]}
              justifyContent="space-between"
              w="full"
            >
              <Box
                display="flex"
                flexDirection={["column", "row"]}
                justifyContent="flex-end"
                py={[3, 0]}
                w="full"
              >
                {data.routes.map((item, index) => (
                  <MenuItems to={item.path} key={index}>{item.title}</MenuItems>
                ))}
              </Box>

              <Box>
                {/* Toggle Theme */}
                <IconButton
                  _focus={{ outline: "none" }}
                  aria-label="toggle mode"
                  className="customIcon"
                  display={["none", "flex"]}
                  icon={
                    colorMode === "light" ? (
                      <FiSun fill="#000" />
                    ) : (
                      <FiMoon fill="#fff" />
                    )
                  }
                  onClick={toggleColorMode}
                  size="xs"
                  variant="ghost"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      ))}
    </Box>
  );
};

export default Header;
