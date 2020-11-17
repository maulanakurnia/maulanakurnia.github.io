import { chakra, Link as chakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ActiveLink = ({ href, children }: any) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <chakra.span
        cursor="pointer"
        color={isActive ? "#2e7ad1" : ""}
        fontWeight={isActive ? "700" : ""}
        my="auto"
        px={[0, 2]}
        py={[1, 0]}
        borderTopWidth={["1px", "0"]}
        fontSize="15px"
      >
        {children}
      </chakra.span>
    </Link>
  );
};

export default ActiveLink;
