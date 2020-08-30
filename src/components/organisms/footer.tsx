import React from "react";
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/core";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href }) => (
  <Link display="inline-block" href={href} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
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
  <Box as="footer" mt={12} textAlign="center" p={10}>
    <Stack mt={4} direction="row" spacing="12px" justify="center" p={5}>
      {links.map((link) => (
          <FooterLink key={link.url} href={link.url} icon={link.icon} />
          ))}
    </Stack>
    <Text fontSize="sm">Copyright © {new Date().getFullYear()}  All Rights Reserved</Text>
  </Box>
);

export default Footer;
