import React from "react";
import { IconButton, Link } from "@chakra-ui/core";
import { TypeIconLink } from "types/iconLinkProps";

export const IconLink: React.FC<TypeIconLink> = ({ icon, href }) => (
  <Link display="inline-block" mx="5px" href={href} isExternal>
    <IconButton
      aria-label="social icon"
      icon={icon}
      borderRadius="50%"
      size="md"
      color="gray.500"
      variant="ghost"
    />
  </Link>
);
