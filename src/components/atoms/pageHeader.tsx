import React from "react";
import { Heading } from "@chakra-ui/react";
interface Props {
  title: string;
  simple: boolean;
}
function PageHeader({ title, simple }: Partial<Props>) {
  if (simple) {
    return (
      <Heading as="h1" mb={5}>
        {title}
      </Heading>
    );
  }
  return (
    <Heading as="h1" fontSize={[23, 25]} mb={[5, 10]} pt={"70px"}>
      {title}
    </Heading>
  );
}

export default PageHeader;
