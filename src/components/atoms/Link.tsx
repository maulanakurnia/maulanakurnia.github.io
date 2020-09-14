import NextLink from "next/link";
import { ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  underline?: boolean;
  href: string;
  as?: string;
  className?: string;
  onClick?: () => void;
}

const Link = ({
  children,
  href,
  underline = true,
  className,
  onClick,
  as,
}: LinkProps) => {
  const external =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("#");
  return (
    <>
      {external ? (
        <a className={className} href={href} onClick={onClick}>
          {children}
        </a>
      ) : (
        <NextLink as={as} href={href} passHref>
          <a className={className} href={href} onClick={onClick}>
            {children}
          </a>
        </NextLink>
      )}
      <style jsx>{`
        a {
          text-decoration: ${underline ? "underline" : "none"};
          color: rgb(46, 122, 209);
        }
      `}</style>
    </>
  );
};

export default Link;
