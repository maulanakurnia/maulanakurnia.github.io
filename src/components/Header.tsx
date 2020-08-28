import { Box, Link, Button, useColorMode } from "@chakra-ui/core";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import NextLink from "next/link";
import {ToggleMode} from './utils/toggleMode'

export default function Header() {
  const [open, setOpen] = useState(false);
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "black" };
  const color = { light: "#363537", dark: "#929497" };

  return (
    <Box
      as="header"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      w="100%"
      p={10}
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
            <Link href="/">mufradmabni</Link>
          </Box>
          <Box my="auto" display={["flex", "none"]}>
            <ToggleMode/>
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
            <NextLink as="/" href="/">
              <Link px={[0, 10]} display="block">
                Beranda
              </Link>
            </NextLink>
            <NextLink as="/blog/[slug]" href="/blog/saya">
              <Link px={[0, 10]} display="block">
                Blog
              </Link>
            </NextLink>
          </Box>
          <Box display={{ sx: "none", md: "block" }} my={4}>
            <ToggleMode/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
