import React from "react";
import { IconButton, Link } from "@chakra-ui/react";
import { IconLinkProps } from "types/iconLinkProps";

export const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => (
  <Link display="inline-block" href={href} isExternal mx="5px">
    <IconButton
      aria-label="social icon"
      borderRadius="50%"
      color="gray.500"
      icon={icon}
      size="md"
      variant="ghost"
    />
  </Link>
);
