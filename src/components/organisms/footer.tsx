import React from "react";
import { Box, Icon, Text, Link, Grid, Container } from "@chakra-ui/core";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href }) => (
  <Link display="inline-block" href={href} isExternal>
    <Icon
      _hover={{ fill: "#2273d1" }}
      as={icon}
      color="gray.500"
      fontSize={["sm", "md"]}
    />
  </Link>
);

const links = [
  {
    icon: FaGithub,
    url: "https://github.com/maulanakurnia",
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com/maulanaakurniaa",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/maulanaakurniaa",
  },
  {
    icon: MdEmail,
    url: "mailto:maulanaakurniaa@yahoo.com",
  },
];

export const Footer = () => (
  <Container minWidth={{ md: "md", lg: "xl" }} pb={5}>
    <Box
      as="footer"
      borderTopWidth="1px"
      display={["", "", "flex"]}
      h="50px"
      justifyContent="space-between"
      mt={12}
      position="relative"
      py={10}
      textAlign="center"
    >
      <Text fontSize={{ xs: "12px", md: "15px" }}>
        © 2019 - {new Date().getFullYear()} Maulana Kurnia
      </Text>
      <Grid
        display="flex"
        gap={30}
        justifyContent={["center", ""]}
        mb={["40px", "0"]}
        mt={["10px", "0"]}
      >
        {links.map((link) => (
          <FooterLink href={link.url} icon={link.icon} key={link.url} />
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Footer;
