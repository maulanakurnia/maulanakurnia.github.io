import React from "react";
import { Box, Link, Container, Flex, IconButton, Text } from "@chakra-ui/core";
import { FiTwitter, FiGithub, FiInstagram, FiMail } from "react-icons/fi";

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href }) => (
  <Link display="inline-block" mx="5px" href={href} isExternal>
    <IconButton
      aria-label="Twitter"
      // @ts-ignore
      icon={icon}
      borderRadius="50%"
      size="md"
      color="gray.500"
      variant="ghost"
    />
  </Link>
);

const links = [
  {
    icon: <FiGithub />,
    url: "https://github.com/maulanakurnia",
  },
  {
    icon: <FiTwitter />,
    url: "https://twitter.com/maulanaakurniaa",
  },
  {
    icon: <FiInstagram />,
    url: "https://instagram.com/maulanaakurniaa",
  },
  {
    icon: <FiMail />,
    url: "mailto:maulanaakurniaa@yahoo.com",
  },
];

export const Footer = () => (
  <Container minWidth={{ md: "md", lg: "xl" }} pb={5}>
    <Box
      as="footer"
      h="50px"
      mt={12}
      position="relative"
      pt="2em"
      pb="3em"
      textAlign="center"
    >
      <Text fontSize="sm">
        This website is open source,<br></br> build with{" "}
        <Link color="#2e7ad1" href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{" "}
        and{" "}
        <Link color="#2e7ad1" href="https://chakra-ui.com/" isExternal>
          ChakraUI
        </Link>
      </Text>
      <Flex justifyContent={["center", ""]} mb="10px" mt={["10px", "0"]}>
        {links.map((link) => (
          <FooterLink
            href={link.url}
            // @ts-ignore
            icon={link.icon}
            key={link.url}
          />
        ))}
      </Flex>
    </Box>
  </Container>
);

export default Footer;
