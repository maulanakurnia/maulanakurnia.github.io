import { MDXFrontMatter } from "*.mdx";
import widont from "utils/widont";
import formatDate from "utils/formatDate";
import { ReactNode } from "react";
import siteConfig from "config/siteconfig.json";
import MDXComponent from "./MDXComponent";
import { Text, Container, Flex, Link, Box, Image } from "@chakra-ui/core";
import { PageHeader } from "atoms/index";
import { FiClock, FiCalendar } from "react-icons/fi";
import { NextSeo } from "next-seo";
import { HiOutlinePencilAlt } from "react-icons/hi";
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
  const editUrl = `https://github.com/maulanakurnia/personalwebsite/edit/master/blog/${frontMatter.slug}.mdx`;
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
      {/* <Container maxW="lg" pb="5em"> */}
      <Box>
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
        <Flex mt="5em">
          <Link
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            <Image
              alt="Lisensi Creative Commons"
              src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            />
          </Link>
          <Box fontSize="13px" ml="1em">
            <Text as="span">This article is licensed under:</Text>
            <br></br>
            <Link
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Attribution-NonCommercial-ShareAlike International 4.0 (CC
              BY-NC-SA 4.0)
            </Link>
          </Box>
          <Box ml="auto" justifyContent="flex-end" my="auto" fontSize="14px">
            <Link
              display="flex"
              href={editUrl}
              css={{
                svg: {
                  marginTop: "0.2em",
                  marginRight: "0.5em",
                },
              }}
              isExternal
            >
              <HiOutlinePencilAlt />
              Edit on Github
            </Link>
          </Box>
        </Flex>
      </Box>
      .{/* </Container> */}
    </MDXComponent>
  );
}
