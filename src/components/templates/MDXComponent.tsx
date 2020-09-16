import { Box, chakra, Kbd, useColorModeValue, Code } from "@chakra-ui/core";
import Image from "molecules/Image";
import CodeBlock from "molecules/Codeblock";
import { MDXProvider } from "@mdx-js/react";
import React, { ReactElement, ReactNode } from "react";
import {BsLink45Deg} from 'react-icons/bs'
interface MDXComponentProps {
  children: ReactNode;
}

const Pre = (props: any) => (
  <chakra.div borderRadius="sm" my="2em" {...props} />
);

const Table = (props: any) => (
  <chakra.div overflowX="auto">
    <chakra.table mt="32px" textAlign="left" width="full" {...props} />
  </chakra.div>
);

const THead = (props: any) => (
  <chakra.th
    bg={useColorModeValue("gray.50", "whiteAlpha.100")}
    fontSize="sm"
    fontWeight="semibold"
    p={2}
    {...props}
  />
);

const TData = (props: any) => (
  <chakra.td
    borderColor="inherit"
    borderTopWidth="1px"
    fontSize="sm"
    p={2}
    whiteSpace="normal"
    {...props}
  />
);

const LinkedHeading = (props: any) => (
  <chakra.h2
    css={{
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]::before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
  >
    <chakra.div pointerEvents="auto" display="flex">
      {props.children}
      {props.id && (
        <chakra.a
          _focus={{ opacity: 1, outline: "none" }}
          aria-label="anchor"
          color="#2e7ad170"
          _hover={{color: '#2e7ad1'}}
          fontWeight="normal"
          href={`#${props.id}`}
          ml="0.375rem"
          opacity={0}
          outline="none"
          mt="5px"
        >
          <BsLink45Deg/>
        </chakra.a>
      )}
    </chakra.div>
  </chakra.h2>
);

export const components = {
  h1: (props: any) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props: any) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props: any) => <LinkedHeading apply="mdx.h3" as="h3" {...props} />,
  h4: (props: any) => <LinkedHeading apply="mdx.h4" as="h4" {...props} />,
  hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: (props: any) => <chakra.code apply="mdx.code" bg="transparent" borderWidth="1px" {...props} color="#7eaaff"/>,
  code: CodeBlock,
  Image,
  pre: Pre,
  kbd: Kbd,
  br: (props: any) => <Box height="24px" {...props} />,
  table: Table,
  th: THead,
  td: TData,
  mark: (props: any) => <Box as="mark" px="0.6em" bg="rgba(255, 200, 0, 0.15)" color="inherit" {...props}/>,
  a: (props: any) => <chakra.a apply="mdx.a" color="#2e7ad1" {...props} />,
  p: (props: any) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props: any) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props: any) => <chakra.li pb="4px" {...props} />,
  blockquote: (props: any) => (
    <chakra.div apply="mdx.blockquote" as="blockquote" bg="rgba(255,200,0,0.15)" border="1px solid rgba(255,200,0,0.15)" {...props} />
  ),
};

const MDXComponent = ({
  children,
}: MDXComponentProps): ReactElement<typeof MDXProvider> => (
  <MDXProvider components={{ ...components }}>{children}</MDXProvider>
);

export default MDXComponent;

