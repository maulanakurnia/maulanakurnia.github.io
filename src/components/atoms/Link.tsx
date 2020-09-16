import NextLink from "next/link";
import { ReactNode } from "react";
import { Link as ChakraLink } from "@chakra-ui/core"
export interface LinkProps {
  children: ReactNode;
  underline?: boolean;
  href: string;
  as?: string;
  className?: string;
}

const Link = ({
  children,
  href,
  as,
}: LinkProps) => {
  const external =
    href.startsWith("http") ||
    href.startsWith("https") ||
    href.startsWith("mailto") ||
    href.startsWith("#");
  return (
    <>
      {external ? (
        <ChakraLink href={href} color="rgb(46, 122, 209)" isExternal>
            {children}
        </ChakraLink>
      ) : (
        <NextLink as={as} href={href} passHref>
          <ChakraLink href={href} color="rgb(46, 122, 209)">
            {children}
          </ChakraLink>
        </NextLink>
      )}
    </>
  );
};

export default Link;
