import { Fragment } from "react";
import { Container } from "@chakra-ui/core";
import {
  SectionBlog,
  SectionHeader,
  SectionDevelop,
  SectionProject,
  SectionWelcome,
} from "molecules/HomePage";
import { DefaultSeo } from "next-seo";
const IndexPage = () => {
  return (
    <Fragment>
      <DefaultSeo nofollow={true} noindex={true} title="mufradmabni" />
      <SectionHeader />
      <Container maxW="xl" textAlign="center">
        <SectionWelcome />
        <SectionDevelop />
        <SectionBlog />
        <SectionProject />
      </Container>
    </Fragment>
  );
};
export default IndexPage;
