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
        <Icon as={icon} fontSize={['sm','md']} color="gray.500" _hover={{fill: '#2273d1'}}/>
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
    <Container minWidth={{md: 'md', lg:'xl'}} pb={5}>
        <Box as="footer" mt={12} py={10} borderTopWidth="1px" display={['','','flex']} textAlign="center" justifyContent="space-between" position="relative" h="50px">
            <Text fontSize={{xs: '12px', md: '15px'}}>Copyright © {new Date().getFullYear()}  All Rights Reserved</Text>
            <Grid gap={30} display="flex" justifyContent={['center','']} mt={['10px','0']} mb={['40px','0']}>
            {links.map((link) => (
                <FooterLink key={link.url} href={link.url} icon={link.icon} />
                ))}
            </Grid>
        </Box>
    </Container>
);

export default Footer;
