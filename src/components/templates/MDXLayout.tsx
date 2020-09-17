import { MDXFrontMatter } from "*.mdx";
import widont from "utils/widont";
import formatDate from "utils/formatDate";
import { ReactNode } from "react";
import siteConfig from "config/siteconfig.json";
import MDXComponent from "./MDXComponent";
import { Text, Container, Flex } from "@chakra-ui/core";
import { PageHeader } from "atoms/index";
import { FiClock, FiCalendar } from "react-icons/fi";
import { NextSeo } from "next-seo";

type LayoutProps = {
  frontMatter?: MDXFrontMatter;
  children: ReactNode;
  readingTime: String;
};

export default function Layout({
  children,
  frontMatter,
  readingTime,
}: LayoutProps) {
  const site = siteConfig;
  const title = frontMatter?.title || site.title;
  const isRoot = title == site.title;
  const date = frontMatter?.date;
  const formattedDate = formatDate(date || "");
  const description = frontMatter?.description;
  const ogSlug = frontMatter?.ogSlug;
  return (
    <MDXComponent>
      <NextSeo
        title={title + " | " + site.title}
        description={description || site.description}
        twitter={site.twitter}
        openGraph={{
          locale: "en_ID",
          images: [
            {
              url: ogSlug
                ? `${process.env.VERCEL_URL}og/${ogSlug}`
                : `${process.env.VERCEL_URL}images/og.png`,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <Container maxW="md" borderBottomWidth="1px" pb="5em">
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
            <Text as="span" display="flex">
              <Text mr="5px" my="auto">
                <FiClock />
              </Text>
              {readingTime}
            </Text>
          </Flex>
        )}
        {children}
      </Container>
    </MDXComponent>
  );
}
