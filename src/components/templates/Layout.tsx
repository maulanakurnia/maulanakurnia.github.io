import { MDXFrontMatter } from "*.mdx";
import widont from "utils/widont";
import formatDate from "utils/formatDate";
import { ReactNode } from "react";
import siteConfig from "config/siteconfig.json";
import Metatags from "atoms/Metatags";
import MDXLayout from "./MDXLayout";
import { Text, Container, Flex } from "@chakra-ui/core";
import { PageHeader } from "atoms/index";
import { FiClock, FiCalendar } from "react-icons/fi";
import { GlobalStyle } from "templates/index";
type LayoutProps = {
  frontMatter?: MDXFrontMatter;
  children: ReactNode;
};

const Content = ({ frontMatter, children }: LayoutProps) => {
  const site = siteConfig;
  const title = frontMatter?.title || site.title;
  const isRoot = title == site.title;
  const date = frontMatter?.date;
  const formattedDate = formatDate(date || "");
  const excerpt = frontMatter?.excerpt;
  const ogSlug = frontMatter?.ogSlug;

  return (
    <>
      <Metatags
        description={excerpt || site.description}
        thumbnail={
          ogSlug
            ? `https://${process.env.VERCEL_URL}/og/${ogSlug}`
            : `https://${process.env.VERCEL_URL}/images/og.png`
        }
        title={title}
      />
      <Container maxW="md">
        <PageHeader title={widont(title)} />
        {!isRoot && (
          <Flex justifyContent="space-between" mt="-20px">
            {date && (
              <Text as="span" display="flex" fontSize="md">
                <Text as="span" mr="5px" my="auto">
                  <FiCalendar />
                </Text>
                {formattedDate}
              </Text>
            )}
            {/* <Text as="span" display="flex">
              <Text mr="5px" my="auto">
                <FiClock />
              </Text>
              {readingTime}
            </Text> */}
          </Flex>
        )}
        {children}
      </Container>
    </>
  );
};

export default function Layout({ children, frontMatter }: LayoutProps) {
  return (
    <MDXLayout>
      <Content frontMatter={frontMatter}>{children}</Content>
      <GlobalStyle />
    </MDXLayout>
  );
}
